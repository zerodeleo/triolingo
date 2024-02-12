import { Injectable } from '@angular/core';
import { TLanguage } from '../../../shared/types';
import wordsService from '../../../shared/data/dummy-data-words';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor() {}

  async getWords(category: string, languages: TLanguage[]) {
    return (await wordsService.getWords(category, languages)) || [];
  }

  async getAllCategories() {
    return await wordsService.getAllCategories();
  }
}
