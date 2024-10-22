import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ExperienceItemComponent } from '../../components/experience-item/experience-item.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    ExperienceItemComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    { date: '2022 a 2024', position: 'Engenheiro de Software', company: 'Procenge', courseType: '| Tempo Integral' },
    { date: '2021 a 2022', position: 'Desenvolvedor de Software', company: 'Procenge', courseType: '| Estágio'  },
    { date: '2018 a 2020', position: 'Técnico de Informatica', company: 'PoupaTempo', courseType: '| Tempo Integral' },
    { date: '2016 a 2017', position: 'Auxiliar de Laboratório', company: 'Etec Aristóteles Ferreira', courseType: '| Voluntario' }
  ];

  education = [
    { date: '2024 a 2025', degree: 'Engenharia de Software', school: 'PUC Minas', courseType: '| Pós-graduação' },
    { date: '2019 a 2023', degree: 'Engenharia da Computação', school: 'Universidade São Judas', courseType: '| Graduação' },
    { date: '2015 a 2017', degree: 'Técnico em Eletrônica', school: 'Etec Aristóteles Ferreira', courseType: '| Técnico' }
  ];

  complementary= [
    { date: '2024 | 85 Horas', degree: 'Angular: crie aplicações web ágeis', school: 'Alura', courseType: '| Formação Angular' },
    { date: '2024 | 64 Horas', degree: 'Explore o Framework Angular', school: 'Alura', courseType: '| Formação Angular' }
  ]
  isVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      this.isVisible = true;
      this.renderer.addClass(this.el.nativeElement, 'visible'); 
    } else {
      this.isVisible = false;
      this.renderer.removeClass(this.el.nativeElement, 'visible');
    }
  }

  ngAfterViewInit() {
    this.onScroll();
  }
}
