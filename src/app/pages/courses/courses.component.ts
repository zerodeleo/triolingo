import { Component } from '@angular/core';
import { CreateCourseFormComponent } from '../../components/create-course-form/create-course-form.component';
import { ICourse } from '../../../../shared/interface';
import { COURSES } from '../../../../shared/data/dummy-data';
import { ModalComponent } from '../../components/layout/modal/modal.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CreateCourseFormComponent, ModalComponent, CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  isCreateCourseModalOpen = false;
  courses: ICourse[] = COURSES;
}
