import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TWordMap } from '../../../shared/types';
import { ILanguage } from '../../../shared/interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-translate-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './translate-game.component.html',
  styleUrl: './translate-game.component.scss',
})
export class TranslateGameComponent {
  @Input() texts: Partial<TWordMap[]> = [];
  @Input() categories: string[] = [];
  @Input() languages!: ILanguage[];
  toggleAnswer = true;
  typedText = '';
  textIndex = 0;
  text: Partial<TWordMap> = {};

  constructor() {}

  ngOnChanges() {
    if (this.texts.length) {
      this.text = this.texts[this.textIndex]!;
    }
  }

  private updateText() {
    if (this.textIndex === this.texts.length) {
      this.textIndex = 0;
    }
    this.text = this.texts[this.textIndex]!;
    this.typedText = '';
  }

  onInputChange() {
    console.log(this.text);
    if (this.typedText === this.text[this.languages[1].id]) {
      this.textIndex++;
      this.updateText();
    }
  }

  handleChangeText(i: number) {
    this.textIndex =
      (this.textIndex + this.texts.length + i) % this.texts.length;
    this.updateText();
  }
}
