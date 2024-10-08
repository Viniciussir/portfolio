import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css'
})
export class ProjectInfoComponent {
  @Input() projectTitle: string = 'Projeto 1';
  @Input() deployLink: string = 'https://deploy-link.com';
  @Input() githubLink: string = 'https://github.com/project1';
  @Input() tags: { name: string; color: string }[] = [];
}
