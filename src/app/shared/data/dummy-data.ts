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
    description:
      "A life is filled with action and things to do! Verbs are one of the key ingridients in languages. Here, you'll learn how to distinguish a verb in a conversation and how to conjugate them. Learning verbs can be a significant challenge for some languages, but we've made it fun!",
  },
  {
    title: 'The Word Game',
    id: 'the-word-game',
    description:
      "Test your translation skills across various categories in this immersive and interactive game. Here you'll expand your vocabulary by translating and comparing words from the course 3 languages",
  },
  {
    title: 'The Phrase Game',
    id: 'the-phrase-game',
    description:
      'Similar to the word game, test your translation skills of full sentences in various categories.',
  },
  {
    title: 'The Chat Bot',
    id: 'the-chat-bot',
    description:
      'Have a conversation with a bot in the language you prefer, and see the translation in the other 2 languages',
  },
];
