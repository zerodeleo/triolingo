import { Component } from '@angular/core';
import { CreateCourseFormComponent } from '../../components/create-course-form/create-course-form.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CreateCourseFormComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {}
