import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { QUEST_DEV_CATEGORIES, QUEST_DEV_UI } from '../../i18n/quest-dev.i18n';
import type {
  QuestDevCategory,
  QuestDevCategoryMeta,
  QuestDevRound,
  QuestDevRoundOption,
  QuestDevRoundQuestion,
  QuestDevText,
} from '../../models/quest-dev.models';
import { QuestDevLanguageService } from '../../services/quest-dev-language.service';
import { QuestDevQuizService } from '../../services/quest-dev-quiz.service';

@Component({
  selector: 'app-quest-dev-quiz',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quest-dev-quiz.component.html',
  styleUrl: './quest-dev-quiz.component.scss',
})
export class QuestDevQuizComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly quizService = inject(QuestDevQuizService);
  readonly languageService = inject(QuestDevLanguageService);

  readonly ui = QUEST_DEV_UI;

  category: QuestDevCategoryMeta | null = null;
  round: QuestDevRound | null = null;
  index = 0;
  selectedOptionId: string | null = null;
  correctCount = 0;
  finished = false;

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('category');
    const meta = QUEST_DEV_CATEGORIES.find((c) => c.id === param);
    if (!meta) {
      this.router.navigate(['/quest-dev']);
      return;
    }
    this.category = meta;
    this.startRound(meta.id);
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

  get correctOptionText(): QuestDevText | null {
    const question = this.currentQuestion;
    if (!question) {
      return null;
    }
    return question.options.find((option) => option.isCorrect)?.text ?? null;
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
    if (this.isLastQuestion) {
      this.finished = true;
      return;
    }
    this.index++;
    this.selectedOptionId = null;
  }

  restart(): void {
    if (this.category) {
      this.startRound(this.category.id);
    }
  }

  private startRound(category: QuestDevCategory): void {
    this.round = this.quizService.buildRound(category);
    this.index = 0;
    this.selectedOptionId = null;
    this.correctCount = 0;
    this.finished = false;
  }
}
