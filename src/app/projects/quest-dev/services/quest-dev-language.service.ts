import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import type { QuestDevLanguage, QuestDevText } from '../models/quest-dev.models';

const LANGUAGE_KEY = 'nosmad_quest_dev_language_v1';

@Injectable({ providedIn: 'root' })
export class QuestDevLanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly current = signal<QuestDevLanguage>(this.readStored());

  readonly language = this.current.asReadonly();
  readonly isEnglish = computed(() => this.current() === 'en');

  setLanguage(language: QuestDevLanguage): void {
    this.current.set(language);
    this.localStorage?.setItem(LANGUAGE_KEY, language);
  }

  toggleLanguage(): void {
    this.setLanguage(this.current() === 'es' ? 'en' : 'es');
  }

  /** Resolves a bilingual text against the active language. */
  translate(text: QuestDevText): string {
    return text[this.current()];
  }

  private readStored(): QuestDevLanguage {
    const stored = this.localStorage?.getItem(LANGUAGE_KEY);
    return stored === 'en' || stored === 'es' ? stored : 'es';
  }

  private get localStorage(): Storage | null {
    try {
      return this.document.defaultView?.localStorage ?? null;
    } catch {
      return null;
    }
  }
}
