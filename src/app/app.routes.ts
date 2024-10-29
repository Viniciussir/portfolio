import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';

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
        path: 'sobre', 
        component: AboutComponent ,
        title: 'Sobre o Vinicius'
    },
    { 
        path: 'experiencia', 
        component: ExperienceComponent ,
        title: 'Experiência do Vinicius'
    },
    { 
        path: 'projetos', 
        component: ProjectsComponent ,
        title: 'Projetos realizados'
    },
    { 
        path: 'contato', 
        component: ContactComponent ,
        title: 'Entre em Contato'
    }
  ];