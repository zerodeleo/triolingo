import { IOpenAIPromptSystem, IOpenAIPromptUser } from './interface';

export type TLanguage =
  | 'af'
  | 'ar'
  | 'bg'
  | 'bn'
  | 'ca'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'es'
  | 'et'
  | 'fa'
  | 'fi'
  | 'fr'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'lv'
  | 'ms'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'sw'
  | 'th'
  | 'tr'
  | 'uk'
  | 'ur'
  | 'vi'
  | 'zh';

export type TCourseLanguageSelection =
  | 'firstLanguage'
  | 'secondLanguage'
  | 'thirdLanguage';

export type IOpenAIPrompt = [IOpenAIPromptSystem, IOpenAIPromptUser];

export type TWordMap = {
  [key in TLanguage]: string;
};
