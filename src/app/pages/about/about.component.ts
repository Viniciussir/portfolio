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
  infoTextTwo: string = 'Angular | TypeScript | HTML | CSS | Bootstrap';
  verticalTextTwo: string = '2';
  
  infoTitleThree: string = 'Ferramentas e DevOps';
  infoTextThree: string = 'Git | CI/CD (Jenkins)';
  verticalTextThree: string = '3';
  
  infoTitleFour: string = 'Metodologias e Testes';
  infoTextFour: string = 'Metodologias Ágeis | Testes Unitários';
  infoOpcionalFour: string = 'Scrum | Jasmine';
  marginOptionalFour: string = '45px';
  verticalTextFour: string = '4'
  
  infoTitleFive: string = 'Tecnologias Backend';
  infoTextFive: string = 'Nest.js | Node.js';
  verticalTextFive: string = '5';
  
  infoTitleSix: string = 'Banco de Dados';
  infoTextSix: string = 'PostgreSQL | Prisma';
  verticalTextSix: string = '6';
  
  infoTitleSeven: string = 'Infraestrutura';
  infoTextSeven: string = 'AWS | Cloud';
  verticalTextSeven: string = '7';
  
}
