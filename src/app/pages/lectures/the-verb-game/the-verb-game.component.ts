import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-the-verb-game',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './the-verb-game.component.html',
  styleUrl: './the-verb-game.component.scss',
})
export class TheVerbGameComponent { }
