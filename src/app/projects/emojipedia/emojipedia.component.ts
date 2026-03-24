import { Component } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { EMOJI_CATALOG } from './data';
import { EmojiSearchComponent } from './components/emoji-search/emoji-search.component';
import { EmojiCatalogComponent } from './components/emoji-catalog/emoji-catalog.component';
import { EmojiItem } from './interfaces';
import { filterEmojiSections } from './utils/emoji-search.util';

@Component({
  selector: 'app-emojipedia',
  standalone: true,
  imports: [EmojiSearchComponent, EmojiCatalogComponent],
  templateUrl: './emojipedia.component.html',
  styleUrl: './emojipedia.component.scss',
})
export class EmojipediaComponent {
  readonly catalog = EMOJI_CATALOG;
  searchQuery = '';

  constructor(private readonly hotToast: HotToastService) {}

  get filteredSections() {
    return filterEmojiSections([...this.catalog], this.searchQuery);
  }

  get searchHasNoResults(): boolean {
    const q = this.searchQuery.trim();
    if (!q) {
      return false;
    }
    return this.filteredSections.length === 0;
  }

  onEmojiCopied(item: EmojiItem): void {
    this.hotToast.success(`${item.char} copied · ${item.nameEn}`);
  }
}
