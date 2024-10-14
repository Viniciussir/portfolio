import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {
  @Input() date?: string;      
  @Input() title?: string;  
  @Input() subtitle?: string;   
  @Input() courseType?: string;
}
