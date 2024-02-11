import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/courses/courses.component').then(
        (m) => m.CoursesComponent
      ),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/courses/courses.component').then(
        (m) => m.CoursesComponent
      ),
  },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./pages/course-detail/course-detail.component').then(
        (m) => m.CourseDetailComponent
      ),
  },
  {
    path: 'courses/:id/the-verb-game',
    loadComponent: () =>
      import('./pages/lectures/the-verb-game/the-verb-game.component').then(
        (m) => m.TheVerbGameComponent
      ),
  },
  {
    path: 'courses/:id/the-phrase-game',
    loadComponent: () =>
      import(
        './pages/lectures/the-phrase-game/the-phrases-game.component'
      ).then((m) => m.ThePhraseGameComponent),
  },
  {
    path: 'courses/:id/the-word-game',
    loadComponent: () =>
      import('./pages/lectures/the-word-game/the-word-game.component').then(
        (m) => m.TheWordGameComponent
      ),
  },
];
