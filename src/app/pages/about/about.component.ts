import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillBoxComponent } from '../../components/skill-box/skill-box.component';
import { StructuredBoxComponent } from "../../components/structured-box/structured-box.component";
import { VerticalSpacerComponent } from '../../components/vertical-spacer/vertical-spacer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    SkillBoxComponent,
    StructuredBoxComponent,
    VerticalSpacerComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  infoTextOne: string = 'Vinicius Coelho Scampini';
  verticalTextOne: string = '1';

  infoTextTwo: string = 'Pós-Graduação Eng. Software - PUC';
  verticalTextTwo: string = '2';

  infoTextThree: string = 'Bacharel em Eng. Computação - São Judas';
  verticalTextThree: string = '3';

  infoTextFour: string = 'Português Nativo | Inglês  Intermediario';
  verticalTextFour: string = '4';

  infoTextFive: string = 'Soft skills';
  verticalTextFive: string = '5';
}
