import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../../core/services/words/words.service';
import { TWordMap } from '../../../shared/types';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../components/layout/modal/modal.component';
import { LANGUAGE_CODES } from '../../../constants';
import { ILanguage } from '../../../shared/interface';
import { TranslateGameComponent } from '../../../components/games/translate-game/translate-game.component';

@Component({
  selector: 'app-the-word-game',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent, TranslateGameComponent],
  templateUrl: './the-word-game.component.html',
  styleUrl: './the-word-game.component.scss',
})
export class TheWordGameComponent implements OnInit {
  words: Partial<TWordMap[]> = [];
  categories!: string[];
  route!: any;
  selectedCategory!: string;
  languages: ILanguage[] = [];
  isGameModalOpen = false;

  constructor(
    private wordsService: WordsService,
    private activatedRoute: ActivatedRoute
  ) {}

  private async updateWordsList() {
    this.words = await this.wordsService.getWords(
      this.selectedCategory,
      this.languages.map((i) => i.id)
    );
  }

  async ngOnInit() {
    this.route = this.activatedRoute.snapshot.params['id'];
    const languageIds = this.route.split('-');
    this.languages = LANGUAGE_CODES.filter((language) =>
      languageIds.includes(language.id)
    );
    this.categories = await this.wordsService.getAllCategories();
    this.selectedCategory = this.categories[0];
    await this.updateWordsList();
  }

  async onCategorySelect(e: Event) {
    const category = (e.target as HTMLSelectElement).value;
    this.selectedCategory = category;
    await this.updateWordsList();
  }

  onChangeLanguage(e: Event) {
    const index = (e.target as HTMLSelectElement).value;
    const newArr = [...this.languages];
    [newArr[1], newArr[+index]] = [newArr[+index], newArr[1]];
    this.languages = newArr;
  }
}
