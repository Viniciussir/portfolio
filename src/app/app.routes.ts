import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';

export const routes: Routes = [
    // { 
    //     path: '', 
    //     redirectTo: '/home', 
    //     pathMatch: 'full' 
    // },
    // { 
    //     path: 'home',
    //     component: HomeComponent,
    //     title: 'Vinicius Scampini'
    // },
    // { 
    //     path: 'about', 
    //     component: AboutComponent ,
    //     title: 'Sobre o Vinicius'
    // },
    // { 
    //     path: 'projects', 
    //     component: ProjectsComponent ,
    //     title: 'Projetos realizados'
    // },
    // { 
    //     path: 'contact', 
    //     component: ContactComponent ,
    //     title: 'Entre em Contato'
    // },
    { path: '**', 
        component: MaintenanceComponent
    }
  ];