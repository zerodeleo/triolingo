import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ICourse } from '../../shared/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  @Input() course!: ICourse;
  image: File | null = null;
}
