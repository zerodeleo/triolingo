import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateGameComponent } from '../../../components/games/translate-game/translate-game.component';

@Component({
  selector: 'app-the-verb-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './the-verb-game.component.html',
  styleUrl: './the-verb-game.component.scss',
})
export class TheVerbGameComponent {}
