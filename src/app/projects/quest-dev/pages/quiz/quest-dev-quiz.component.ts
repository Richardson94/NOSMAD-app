import { Component, HostListener, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { QUEST_DEV_CATEGORIES, QUEST_DEV_LENGTH_LABELS, QUEST_DEV_UI } from '../../i18n/quest-dev.i18n';
import type {
  QuestDevCategory,
  QuestDevCategoryMeta,
  QuestDevRound,
  QuestDevRoundLength,
  QuestDevRoundOption,
  QuestDevRoundQuestion,
  QuestDevText,
} from '../../models/quest-dev.models';
import { QuestDevLanguageService } from '../../services/quest-dev-language.service';
import { QuestDevQuizService } from '../../services/quest-dev-quiz.service';

const TIP_HOLD_MS = 450;

@Component({
  selector: 'app-quest-dev-quiz',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quest-dev-quiz.component.html',
  styleUrl: './quest-dev-quiz.component.scss',
})
export class QuestDevQuizComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly quizService = inject(QuestDevQuizService);
  readonly languageService = inject(QuestDevLanguageService);

  readonly ui = QUEST_DEV_UI;
  readonly lengthLabels = QUEST_DEV_LENGTH_LABELS;

  category: QuestDevCategoryMeta | null = null;
  length: QuestDevRoundLength | null = null;
  round: QuestDevRound | null = null;
  index = 0;
  selectedOptionId: string | null = null;
  correctCount = 0;
  finished = false;
  tipModalOpen = false;
  tipHolding = false;

  private holdTimer: ReturnType<typeof setTimeout> | null = null;
  private openingPointerId: number | null = null;

  ngOnInit(): void {
    const categoryParam = this.route.snapshot.paramMap.get('category');
    const lengthParam = this.route.snapshot.paramMap.get('length');
    const meta = QUEST_DEV_CATEGORIES.find((c) => c.id === categoryParam);
    if (!meta || !this.quizService.isRoundLength(lengthParam)) {
      this.router.navigate(['/quest-dev']);
      return;
    }
    this.category = meta;
    this.length = lengthParam;
    this.startRound(meta.id, lengthParam);
  }

  ngOnDestroy(): void {
    this.clearHold();
  }

  t(text: QuestDevText): string {
    return this.languageService.translate(text);
  }

  get total(): number {
    return this.round?.questions.length ?? 0;
  }

  get currentQuestion(): QuestDevRoundQuestion | null {
    return this.round?.questions[this.index] ?? null;
  }

  get answered(): boolean {
    return this.selectedOptionId !== null;
  }

  get isLastQuestion(): boolean {
    return this.index === this.total - 1;
  }

  get progressPercent(): number {
    if (!this.total) {
      return 0;
    }
    const completed = this.finished ? this.total : this.index + (this.answered ? 1 : 0);
    return Math.round((completed / this.total) * 100);
  }

  get scorePercent(): number {
    return this.total ? Math.round((this.correctCount / this.total) * 100) : 0;
  }

  get feedbackMessage(): QuestDevText {
    const score = this.scorePercent;
    if (score >= 90) {
      return this.ui.feedbackExcellent;
    }
    if (score >= 75) {
      return this.ui.feedbackGood;
    }
    if (score >= 50) {
      return this.ui.feedbackRegular;
    }
    return this.ui.feedbackLow;
  }

  selectOption(option: QuestDevRoundOption): void {
    if (this.answered) {
      return;
    }
    this.selectedOptionId = option.id;
    if (option.isCorrect) {
      this.correctCount++;
    }
  }

  isSelected(option: QuestDevRoundOption): boolean {
    return this.selectedOptionId === option.id;
  }

  /** Reveals the right answer and the chosen wrong one once the user has answered. */
  optionState(option: QuestDevRoundOption): 'idle' | 'correct' | 'wrong' {
    if (!this.answered) {
      return 'idle';
    }
    if (option.isCorrect) {
      return 'correct';
    }
    return this.isSelected(option) ? 'wrong' : 'idle';
  }

  get answeredCorrectly(): boolean {
    const question = this.currentQuestion;
    return !!question && this.selectedOptionId === question.correctOptionId;
  }

  next(): void {
    if (!this.answered) {
      return;
    }
    this.closeTipModal();
    if (this.isLastQuestion) {
      this.finished = true;
      return;
    }
    this.index++;
    this.selectedOptionId = null;
  }

  restart(): void {
    if (this.category && this.length) {
      this.startRound(this.category.id, this.length);
    }
  }

  onTipPointerDown(event: PointerEvent): void {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }
    this.clearHold();
    this.tipHolding = true;
    this.openingPointerId = event.pointerId;
    try {
      (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    } catch {
      // Capture is optional; pointerId still guards the backdrop against this gesture.
    }
    this.holdTimer = setTimeout(() => {
      this.openTipModal();
    }, TIP_HOLD_MS);
  }

  onTipPointerUp(): void {
    this.clearHold();
  }

  onBackdropPointerUp(event: PointerEvent): void {
    if (event.pointerId === this.openingPointerId) {
      this.openingPointerId = null;
      return;
    }
    this.closeTipModal();
  }

  onTipContextMenu(event: Event): void {
    event.preventDefault();
  }

  onTipKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openTipModal();
    }
  }

  closeTipModal(): void {
    this.tipModalOpen = false;
    this.openingPointerId = null;
    this.clearHold();
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.tipModalOpen) {
      this.closeTipModal();
    }
  }

  private openTipModal(): void {
    this.tipModalOpen = true;
    this.clearHold();
  }

  private clearHold(): void {
    this.tipHolding = false;
    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
      this.holdTimer = null;
    }
  }

  private startRound(category: QuestDevCategory, length: QuestDevRoundLength): void {
    this.round = this.quizService.buildRound(category, length);
    this.index = 0;
    this.selectedOptionId = null;
    this.correctCount = 0;
    this.finished = false;
    this.tipModalOpen = false;
    this.clearHold();
  }
}
