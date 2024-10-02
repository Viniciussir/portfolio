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

  infoTextTwo: string = 'Frontend | Angular | React | TypeScript';
  verticalTextTwo: string = '2';

  infoTextThree: string = 'Backend | Nest.js | Node.js';
  verticalTextThree: string = '3';

  infoTextFour:  string = 'Banco de Dados | PostgreSQL | Prisma';
  verticalTextFour: string = '4';

  infoTextFive: string = 'Infraestrutura | AWS (EC2, RDS, S3)';
  verticalTextFive: string = '5';

  infoTextSix: string = 'Pós-Graduação Eng. Software - PUC';
  verticalTextSix: string = '6';

  infoTextSeven: string = 'Bacharel em Eng. Computação - São Judas';
  verticalTextSeven: string = '7';
}
