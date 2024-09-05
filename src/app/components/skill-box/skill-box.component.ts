import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-box',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './skill-box.component.html',
  styleUrl: './skill-box.component.css'
})
export class SkillBoxComponent {
  @Input() skillName!: string;
  @Input() skillImg!: string;
  @Input() borderColor: string = '#003366'; 
}
