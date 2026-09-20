import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QUEST_DEV_CATEGORIES, QUEST_DEV_UI } from '../../i18n/quest-dev.i18n';
import type { QuestDevCategory, QuestDevText } from '../../models/quest-dev.models';
import { QuestDevLanguageService } from '../../services/quest-dev-language.service';
import { QuestDevQuizService } from '../../services/quest-dev-quiz.service';

@Component({
  selector: 'app-quest-dev-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quest-dev-home.component.html',
  styleUrl: './quest-dev-home.component.scss',
})
export class QuestDevHomeComponent {
  private readonly quizService = inject(QuestDevQuizService);
  readonly languageService = inject(QuestDevLanguageService);

  readonly ui = QUEST_DEV_UI;
  readonly categories = QUEST_DEV_CATEGORIES;

  t(text: QuestDevText): string {
    return this.languageService.translate(text);
  }

  poolSize(category: QuestDevCategory): number {
    return this.quizService.poolSize(category);
  }

  roundSize(category: QuestDevCategory): number {
    return this.quizService.roundSize(category);
  }
}
