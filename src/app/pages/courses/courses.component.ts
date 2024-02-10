import { Component } from '@angular/core';
import { CreateCourseFormComponent } from '../../components/create-course-form/create-course-form.component';
import { ICourse } from '../../shared/interface';
import { COURSES } from '../../shared/data/dummy-data';
import { ModalComponent } from '../../components/layout/modal/modal.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseService } from '../../core/services/course/course.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CreateCourseFormComponent,
    ModalComponent,
    CourseCardComponent,
    CommonModule,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  isCreateCourseModalOpen = false;
  courses$!: Observable<ICourse[]>;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses$ = this.courseService.getCourses();
  }
}
