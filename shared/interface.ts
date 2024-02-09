export interface ILanguageCode {
  id: string;
  icon: string;
  title: string;
}

export interface ICourseLanguageSelection {
  id: string;
  title: string;
  selected?: string;
}

export interface ICourse {
  title: string;
  languagesIcons: string[];
  id: string;
  languagesIds: string[];
  languagesTitles: string[];
  isPrivate: boolean;
}

export interface ILecture {
  title: string;
  id: string;
}
