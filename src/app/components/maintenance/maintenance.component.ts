import { Component } from '@angular/core';
import { SkillBoxComponent } from "../skill-box/skill-box.component";

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [
    SkillBoxComponent
  ],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent {

}
