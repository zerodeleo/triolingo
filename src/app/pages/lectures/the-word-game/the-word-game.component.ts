import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-the-word-game',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './the-word-game.component.html',
  styleUrl: './the-word-game.component.scss',
})
export class TheWordGameComponent { }
