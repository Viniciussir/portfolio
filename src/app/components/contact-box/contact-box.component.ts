import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-box',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './contact-box.component.html',
  styleUrl: './contact-box.component.css'
})
export class ContactBoxComponent {
  @Input() contactName!: string;
  @Input() contactDescription!: string;
  @Input() contactImg!: string;
  @Input() borderColor: string = '#003366'; 
}
