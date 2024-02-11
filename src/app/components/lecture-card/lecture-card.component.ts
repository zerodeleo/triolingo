import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ILecture } from '../../shared/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lecture-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './lecture-card.component.html',
  styleUrl: './lecture-card.component.scss',
})
export class LectureCardComponent implements OnInit {
  @Input() lecture!: ILecture;
  route!: string;
  lectureId!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.route = this.router.url;
  }
}
