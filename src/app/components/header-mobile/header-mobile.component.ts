import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.css'
})
export class HeaderMobileComponent {

  @Input() isMobile: boolean = false;

  constructor(private router: Router) {}

  scrollTo(sectionId: string) {
    this.router.navigate([`/${sectionId}`]).then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
  }

}
