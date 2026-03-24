import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emoji-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emoji-search.component.html',
  styleUrl: './emoji-search.component.scss',
})
export class EmojiSearchComponent {
  @Input() query = '';
  @Output() readonly queryChange = new EventEmitter<string>();

  onInput(value: string): void {
    this.queryChange.emit(value);
  }
}
