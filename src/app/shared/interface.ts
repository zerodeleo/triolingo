import { TLanguage } from './types';

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
}
