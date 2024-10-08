import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() imageUrl: string = 'img/projects/icon-portfolio.png';
  @Input() projectTitle: string = 'Projeto 1';
}
