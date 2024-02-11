import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/layout/modal/modal.component';
import { ICourse, ILecture } from '../../shared/interface';
import { COURSES, LECTURES } from '../../shared/data/dummy-data';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../core/services/course/course.service';
import { LectureCardComponent } from '../../components/lecture-card/lecture-card.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, ModalComponent, AsyncPipe, LectureCardComponent],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent implements OnInit {
  course!: ICourse | null;
  route!: string;
  isLoadingCourse = false;
  lectures: ILecture[] = LECTURES;
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.course = (await this.courseService.getCourse(id)) as ICourse;
  }
}
