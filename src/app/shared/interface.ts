import { TLanguage, TWordMap } from './types';

export interface ILanguage {
  id: TLanguage;
  icon: string;
  title: string;
}

export interface ICourseLanguageSelection {
  id: string;
  title: string;
}

export interface ICourse {
  id: string;
  languages: ILanguage[];
}

export interface ICourseForm {
  isPrivate: boolean;
  firstLanguage: ILanguage;
  secondLanguage: ILanguage;
  thirdLanguage: ILanguage;
}

export interface ILecture {
  title: string;
  id: string;
  description: string;
}

export interface IOpenAIPromptSystem {
  role: 'system';
  content: string;
}

export interface IOpenAIPromptUser {
  role: 'user';
  content: string;
}

export interface IWords {
  id: string;
  phrases?: {
    past_tense?: Partial<TWordMap[]>;
    future_tense?: Partial<TWordMap[]>;
    present_tense?: Partial<TWordMap[]>;
  };
  words: Partial<TWordMap[]>;
}
