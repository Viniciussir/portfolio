import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectInfoComponent } from '../../components/project-info/project-info.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent,
    ProjectInfoComponent
],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projectTitle1:string = 'Portfólio';
  projectDescription1:string = 'Este é meu portfólio pessoal, criado em Angular para destacar minhas habilidades e projetos. O design responsivo proporciona uma experiência fluida em diversos dispositivos. Usei CSS puro e SCSS para um layout moderno e organizado, incluindo links para meus repositórios no GitHub e deploy via GitHub Pages.';
  deployLink1:string = 'https://viniciussir.github.io/portfolio/';
  githubLink1:string = 'https://github.com/Viniciussir/portfolio';
  tags1:{ name: string; color: string }[] = [
    { name: 'Angular', color: '#dd0031' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'HTML', color: '#3178c6' },
    { name: 'CSS', color: '#c6538c' },
    { name: 'SCSS ', color: '#c6538c' }
  ]

}
