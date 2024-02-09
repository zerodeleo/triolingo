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
];
