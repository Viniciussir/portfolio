import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillBoxComponent } from '../../components/skill-box/skill-box.component';
import { StructuredBoxComponent } from "../../components/structured-box/structured-box.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    SkillBoxComponent,
    StructuredBoxComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  infoTextOne: string = 'Vinicius Coelho Scampini';
  verticalTextOne: string = 'V';

  infoTextTwo: string = '24 anos';
  verticalTextTwo: string = 'C';

  infoTextThree: string = 'Pós-Graduação Eng. Software - PUC';
  verticalTextThree: string = 'S';
}
