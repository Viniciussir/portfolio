import { Component } from '@angular/core';
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";
import { ContactDetailsComponent } from '../../components/contact-details/contact-details.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ContactFormComponent,
    ContactDetailsComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
