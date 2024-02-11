import { ICourse, ILecture } from '../interface';

export const COURSES: ICourse[] = [
  {
    id: 'en,sv,nl',
    languages: [
      { id: 'en', icon: '🇬🇧', title: 'English' },
      { id: 'sv', icon: '🇸🇪', title: 'Swedish' },
      { id: 'nl', icon: '🇳🇱', title: 'Dutch' },
    ],
  },
  {
    id: 'ar,bg,da',
    languages: [
      { id: 'ar', icon: '🇸🇦', title: 'Arabic' },
      { id: 'bg', icon: '🇧🇬', title: 'Bulgarian' },
      { id: 'da', icon: '🇩🇰', title: 'Danish' },
    ],
  },
  {
    id: 'de,es,fr',
    languages: [
      { id: 'de', icon: '🇩🇪', title: 'German' },
      { id: 'es', icon: '🇪🇸', title: 'Spanish' },
      { id: 'fr', icon: '🇫🇷', title: 'French' },
    ],
  },
  {
    id: 'it,pt,ru',
    languages: [
      { id: 'it', icon: '🇮🇹', title: 'Italian' },
      { id: 'pt', icon: '🇵🇹', title: 'Portuguese' },
      { id: 'ru', icon: '🇷🇺', title: 'Russian' },
    ],
  },
];

export const LECTURES: ILecture[] = [
  {
    title: 'The Verb Game',
    id: 'the-verb-game',
  },
  {
    title: 'The Word Game',
    id: 'the-word-game',
  },
  {
    title: 'The Phrase Game',
    id: 'the-phrase-game',
  },
  {
    title: 'The Chat Bot',
    id: 'the-chat-bot',
  },
];
