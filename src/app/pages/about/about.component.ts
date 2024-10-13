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

  infoTitleOne: string = 'Nome | Idade';
  infoTextOne: string = 'Vinicius Coelho Scampini | 24 Anos';
  verticalTextOne: string = '1';

  infoTitleTwo: string = 'Tecnologias Frontend';
  infoTextTwo: string = 'Angular | React | TypeScript | Javascript';
  verticalTextTwo: string = '2';

  infoTitleThree: string = 'Tecnologias Backend';
  infoTextThree: string = 'Nest.js | Node.js';
  verticalTextThree: string = '3';

  infoTitleFour:  string = 'Banco de Dados';
  infoTextFour:  string = 'PostgreSQL | Prisma';
  verticalTextFour: string = '4';

  infoTitleFive: string = 'Infraestrutura';
  infoTextFive: string = 'AWS | Cloud';
  verticalTextFive: string = '5';

  // infoTextSix: string = 'Pós-Graduação Eng. Software - PUC';
  // verticalTextSix: string = '6';

  // infoTextSeven: string = 'Bacharel em Eng. Computação - São Judas';
  // verticalTextSeven: string = '7';
}
