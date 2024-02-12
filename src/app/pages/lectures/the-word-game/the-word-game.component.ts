import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../../core/services/words/words.service';
import { TLanguage, TWordMap } from '../../../shared/types';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../components/layout/modal/modal.component';
import { LANGUAGE_CODES } from '../../../constants';
import { ILanguage } from '../../../shared/interface';

@Component({
  selector: 'app-the-word-game',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './the-word-game.component.html',
  styleUrl: './the-word-game.component.scss',
})
export class TheWordGameComponent implements OnInit {
  words: Partial<TWordMap[]> = [];
  word!: Partial<TWordMap>;
  wordIdx: number = 0;
  categories!: string[] | undefined;
  route!: any;
  languageIds!: TLanguage[];
  selectedCategory!: string;
  inputValue: string = '';
  languages!: ILanguage[];
  isGameModalOpen = true;
  toggleAnswer = true;

  constructor(
    private wordsService: WordsService,
    private activatedRoute: ActivatedRoute
  ) {}

  private async updateWordsList() {
    this.words = await this.wordsService.getWords(
      this.selectedCategory,
      this.languageIds
    );
  }

  private updateWord() {
    if (this.wordIdx === this.words.length) {
      this.wordIdx = 0;
    }
    this.word = this.words[this.wordIdx]!;
    this.inputValue = '';
  }

  handleChangeWord(i: number) {
    this.wordIdx = (this.wordIdx + this.words.length + i) % this.words.length;
    this.updateWord();
  }

  async ngOnInit() {
    this.route = this.activatedRoute.snapshot.params['id'];
    this.languageIds = this.route.split('-');
    this.languages = LANGUAGE_CODES.filter((language) =>
      this.languageIds.includes(language.id)
    );
    this.categories = await this.wordsService.getAllCategories();
    this.selectedCategory = this.categories[0];
    await this.updateWordsList();
    this.updateWord();
  }

  async onCategorySelect(e: Event) {
    const category = (e.target as HTMLSelectElement).value;
    this.selectedCategory = category;
    await this.updateWordsList();
    if (this.words) {
      this.updateWord();
    }
  }

  async onInputChange() {
    if (this.inputValue === this.word[this.languageIds[1]]) {
      this.wordIdx++;
      this.updateWord();
    }
  }
}
