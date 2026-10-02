import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
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
const READ_MS = 7000;
const TIP_MOVE_PX = 10;

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
  reading = false;
  readonly readMs = READ_MS;
  tipModalOpen = false;
  tipHolding = false;
  thumbHeight = 100;
  thumbTop = 0;

  @ViewChild('quizBody') quizBody?: ElementRef<HTMLElement>;
  @ViewChild('resultBody') resultBody?: ElementRef<HTMLElement>;

  private holdTimer: ReturnType<typeof setTimeout> | null = null;
  private readTimer: ReturnType<typeof setTimeout> | null = null;
  private tipHoldReady = false;
  private tipMoved = false;
  private tipStartX = 0;
  private tipStartY = 0;
  private railDrag: { el: HTMLElement; pointerId: number; startY: number; startScroll: number } | null = null;

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
    this.clearReading();
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
    setTimeout(() => this.syncActivePane());
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
      this.clearReading();
      setTimeout(() => this.syncActivePane());
      return;
    }
    this.index++;
    this.selectedOptionId = null;
    this.beginReading();
  }

  skipReading(): void {
    this.reading = false;
    this.clearReading();
    setTimeout(() => this.syncActivePane(true));
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
    this.tipMoved = false;
    this.tipHoldReady = false;
    this.tipHolding = true;
    this.tipStartX = event.clientX;
    this.tipStartY = event.clientY;
    this.holdTimer = setTimeout(() => {
      this.tipHoldReady = true;
    }, TIP_HOLD_MS);
  }

  onTipPointerMove(event: PointerEvent): void {
    if (!this.tipHolding) {
      return;
    }
    const moved =
      Math.abs(event.clientX - this.tipStartX) > TIP_MOVE_PX ||
      Math.abs(event.clientY - this.tipStartY) > TIP_MOVE_PX;
    if (moved) {
      this.tipMoved = true;
      this.tipHoldReady = false;
      this.clearHold();
    }
  }

  onTipPointerUp(): void {
    const shouldOpen = this.tipHoldReady && !this.tipMoved;
    this.tipHoldReady = false;
    this.tipMoved = false;
    this.clearHold();
    if (shouldOpen) {
      this.openTipModal();
    }
  }

  onTipPointerCancel(): void {
    this.tipHoldReady = false;
    this.tipMoved = true;
    this.clearHold();
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
    this.tipHoldReady = false;
    this.clearHold();
  }

  syncThumb(el: HTMLElement): void {
    const view = el.clientHeight || 1;
    const max = el.scrollHeight - el.clientHeight;
    if (max <= 1) {
      this.thumbHeight = 100;
      this.thumbTop = 0;
      return;
    }
    const minRatio = Math.min(56 / view, 0.85);
    const ratio = Math.min(Math.max(el.clientHeight / el.scrollHeight, minRatio), 1);
    this.thumbHeight = ratio * 100;
    const travel = 100 - this.thumbHeight;
    this.thumbTop = travel <= 0 ? 0 : (el.scrollTop / max) * travel;
  }

  onRailPointerDown(event: PointerEvent, el: HTMLElement): void {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }
    event.preventDefault();
    const rail = event.currentTarget as HTMLElement;
    const rect = rail.getBoundingClientRect();
    const y = event.clientY - rect.top;
    const max = Math.max(el.scrollHeight - el.clientHeight, 0);
    const thumbPx = (this.thumbHeight / 100) * rect.height;
    const travel = Math.max(rect.height - thumbPx, 1);
    const thumbTopPx = (this.thumbTop / 100) * rect.height;
    if (y < thumbTopPx || y > thumbTopPx + thumbPx) {
      el.scrollTop = Math.min(Math.max(((y - thumbPx / 2) / travel) * max, 0), max);
    }
    try {
      rail.setPointerCapture(event.pointerId);
    } catch {
      // Drag still follows document pointer events.
    }
    this.railDrag = {
      el,
      pointerId: event.pointerId,
      startY: event.clientY,
      startScroll: el.scrollTop,
    };
  }

  @HostListener('document:pointermove', ['$event'])
  onDocumentPointerMove(event: PointerEvent): void {
    if (!this.railDrag || event.pointerId !== this.railDrag.pointerId) {
      return;
    }
    const el = this.railDrag.el;
    const max = el.scrollHeight - el.clientHeight;
    const view = el.clientHeight || 1;
    const thumbPx = (this.thumbHeight / 100) * view;
    const travel = Math.max(view - thumbPx, 1);
    const dy = event.clientY - this.railDrag.startY;
    el.scrollTop = this.railDrag.startScroll + (dy / travel) * max;
  }

  @HostListener('document:pointerup', ['$event'])
  @HostListener('document:pointercancel', ['$event'])
  onDocumentPointerEnd(event: PointerEvent): void {
    if (this.railDrag?.pointerId === event.pointerId) {
      this.railDrag = null;
    }
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    const el = this.quizBody?.nativeElement ?? this.resultBody?.nativeElement;
    if (el) {
      this.syncThumb(el);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.tipModalOpen) {
      this.closeTipModal();
      return;
    }
    if (!this.reading || (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Escape')) {
      return;
    }
    const target = event.target as HTMLElement | null;
    if (target?.closest('a')) {
      return;
    }
    event.preventDefault();
    this.skipReading();
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
    this.beginReading();
  }

  private beginReading(): void {
    this.clearReading();
    if (!this.round?.questions.length) {
      this.reading = false;
      return;
    }
    this.reading = true;
    this.readTimer = setTimeout(() => this.skipReading(), READ_MS);
  }

  private clearReading(): void {
    if (this.readTimer) {
      clearTimeout(this.readTimer);
      this.readTimer = null;
    }
  }

  private syncActivePane(resetScroll = false): void {
    const el = this.quizBody?.nativeElement ?? this.resultBody?.nativeElement;
    if (!el) {
      return;
    }
    if (resetScroll) {
      el.scrollTop = 0;
    }
    this.syncThumb(el);
  }
}
