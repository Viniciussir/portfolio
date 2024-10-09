import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBoxComponent } from '../contact-box/contact-box.component';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [
    CommonModule,
    ContactBoxComponent
  ],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {

}
