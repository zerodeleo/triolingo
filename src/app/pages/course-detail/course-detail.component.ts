import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ModalComponent } from '../../components/layout/modal/modal.component';
import { ICourse, ILecture } from '../../../../shared/interface';
import { COURSES, LECTURES } from '../../../../shared/data/dummy-data';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [ModalComponent, AsyncPipe],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent {
  course: ICourse | null = COURSES[0];
  isLoadingCourse = false;
  lectures: ILecture[] = LECTURES;
  isCreateLectureModalOpen = false;
}
