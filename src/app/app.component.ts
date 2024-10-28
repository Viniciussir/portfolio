import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { VerticalSpacerComponent } from './components/vertical-spacer/vertical-spacer.component';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './pages/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    MaintenanceComponent,
    VerticalSpacerComponent,
    CommonModule,
    ExperienceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isUnderMaintenance: boolean = true; 

  handleCloseMaintenance() {
    this.isUnderMaintenance = false;
  }
}
