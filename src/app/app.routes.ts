import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
    { 
        path: 'home',
        component: HomeComponent,
        title: 'Vinicius Scampini'
    },
    { 
        path: 'about', 
        component: AboutComponent ,
        title: 'Sobre o Vinicius'
    },
    { 
        path: 'experience', 
        component: ExperienceComponent ,
        title: 'Experiência profissional'
    },
    { 
        path: 'projects', 
        component: ProjectsComponent ,
        title: 'Projetos realizados'
    },
    { 
        path: 'contact', 
        component: ContactComponent ,
        title: 'Entre em Contato'
    },
    {
        path: '**',
        component: HomeComponent
    },
  ];