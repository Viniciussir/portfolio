import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderMobileComponent } from '../header-mobile/header-mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterOutlet,
    RouterLinkActive,
    HeaderMobileComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMobile: boolean = false;
  iconMobile:string = 'img/icon-menu-mobile.png';

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

  clickMenuMobile(): void {
    this.isMobile = !this.isMobile;
    if(this.isMobile){
      this.iconMobile = 'img/icon-close.png';
    } else {
      this.iconMobile = 'img/icon-menu-mobile.png';
    }
  }

}
