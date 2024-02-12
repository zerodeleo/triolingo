import { Injectable } from '@angular/core';
import OpenAIApi, { ClientOptions } from 'openai';
import ENVIRONMENT from '../../../../../environments/environment';
import { IOpenAIPrompt } from '../../../shared/types';
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  constructor() {}

  private openAiConfig: ClientOptions = ENVIRONMENT.openAiConfig;
  readonly openai = new OpenAIApi(this.openAiConfig);

  getData(messages: IOpenAIPrompt) {
    from(
      this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages,
      })
    )
      .pipe()
      .subscribe((data) => console.log(data));
  }

  generateTranslateWordMessage(
    word: string,
    languageCodes: string
  ): IOpenAIPrompt {
    return [
      {
        role: 'system',
        content:
          'Given a word and language codes, your task is to translate the word and return it in format: [{ key in languageCode: string, key in languageCode: string, key in languageCode: string}]',
      },
      {
        role: 'user',
        content: `${word}, ${languageCodes}`,
      },
    ];
  }
}
