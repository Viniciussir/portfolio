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
        component: HomeComponent 
    },
    { 
        path: 'about', 
        component: AboutComponent 
    },
    { 
        path: 'experience', 
        component: ExperienceComponent 
    },
    { 
        path: 'projects', 
        component: ProjectsComponent 
    },
    { 
        path: 'contact', 
        component: ContactComponent 
    },
    {
        path: '**',
        component: HomeComponent
    },
  ];