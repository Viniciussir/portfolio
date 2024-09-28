import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-spacer',
  standalone: true,
  imports: [],
  templateUrl: './vertical-spacer.component.html',
  styleUrl: './vertical-spacer.component.css'
})
export class VerticalSpacerComponent {
  @Input() text: string = 'Sobre min'; 
}
