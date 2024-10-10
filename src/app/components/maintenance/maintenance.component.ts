import { Component, EventEmitter, Output } from '@angular/core';
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
   
  @Output() close: EventEmitter<void> = new EventEmitter();

  closeMaintenance() {
    this.close.emit();
  }
}
