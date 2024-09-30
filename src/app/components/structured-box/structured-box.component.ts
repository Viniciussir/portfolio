import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-structured-box',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './structured-box.component.html',
  styleUrl: './structured-box.component.css'
})
export class StructuredBoxComponent {

  @Input() infoText: string = '';
  @Input() verticalText: string = '';
  @Input() infoLineHorizontal: boolean = true;

}
