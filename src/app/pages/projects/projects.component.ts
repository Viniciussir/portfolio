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

  projectPortfolio:string = 'Portfólio';
  projectPortfolioDescription:string = 'Este é meu portfólio pessoal, criado em Angular para destacar minhas habilidades e projetos. O design responsivo proporciona uma experiência fluida em diversos dispositivos. Usei CSS puro e SCSS para um layout moderno e organizado, incluindo links para meus repositórios no GitHub e deploy via GitHub Pages.';
  projectPortfolioDeployLink:string = 'https://viniciussir.github.io/portfolio/';
  projectPortfolioGithubLink:string = 'https://github.com/Viniciussir/portfolio';
  projectPortfolioTags:{ name: string; color: string }[] = [
    { name: 'Angular', color: '#dd0031' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'HTML', color: '#3178c6' },
    { name: 'CSS', color: '#c6538c' },
    { name: 'SCSS ', color: '#c6538c' }
  ]

  projectPokeapi:string = 'Pokeapi';
  projectPokeapiDescription:string = 'Este projeto é uma aplicação em Angular que utiliza a PokeAPI para explorar o universo Pokémon. Com design responsivo, uso de CSS puro e SCSS, a interface é moderna e intuitiva. Os usuários podem buscar e visualizar Pokémon, com detalhes sobre tipos e habilidades. O projeto está hospedado no GitHub Pages, com links para o repositório.';
  projectPokeapiDeployLink:string = 'https://viniciussir.github.io/pokeapi/';
  projectPokeapiGithubLink:string = 'https://github.com/Viniciussir/pokeapi';
  projectPokeapiTags:{ name: string; color: string }[] = [
    { name: 'Angular', color: '#dd0031' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'HTML', color: '#3178c6' },
    { name: 'CSS', color: '#c6538c' },
    { name: 'SCSS ', color: '#c6538c' }
  ]

}
