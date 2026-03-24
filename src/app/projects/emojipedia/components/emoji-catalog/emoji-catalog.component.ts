import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmojiItem, EmojiSection } from '../../interfaces';
import { EmojiTileComponent } from '../emoji-tile/emoji-tile.component';

@Component({
  selector: 'app-emoji-catalog',
  standalone: true,
  imports: [EmojiTileComponent],
  templateUrl: './emoji-catalog.component.html',
  styleUrl: './emoji-catalog.component.scss',
})
export class EmojiCatalogComponent {
  @Input({ required: true }) sections: EmojiSection[] = [];
  /** Si true, no hay coincidencias de búsqueda. */
  @Input() emptySearch = false;
  @Output() readonly emojiCopied = new EventEmitter<EmojiItem>();

  onCopied(item: EmojiItem): void {
    this.emojiCopied.emit(item);
  }
}
