import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CourseService } from './core/services/course/course.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [CourseService],
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'triolingo';
  theme = true;

  toggleTheme = () => {
    this.theme = !this.theme;
  };
}
