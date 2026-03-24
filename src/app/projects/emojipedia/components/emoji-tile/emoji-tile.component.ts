import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmojiItem } from '../../interfaces';

@Component({
  selector: 'app-emoji-tile',
  standalone: true,
  templateUrl: './emoji-tile.component.html',
  styleUrl: './emoji-tile.component.scss',
})
export class EmojiTileComponent {
  @Input({ required: true }) item!: EmojiItem;
  @Output() readonly copied = new EventEmitter<EmojiItem>();

  async copy(): Promise<void> {
    const text = this.item.char;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      this.copied.emit(this.item);
    } catch {
      // Silencioso: el usuario puede seleccionar manualmente
    }
  }
}
