import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-spacer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './vertical-spacer.component.html',
  styleUrl: './vertical-spacer.component.css'
})
export class VerticalSpacerComponent {
  @Input() verticaltext: string = ''; 
  @Input() firstColorGradient: string = ''; 
  @Input() secondColorGradient: string = ''; 
}
