import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('menu') menu!: ElementRef;

  currentDate: Date = new Date();
  menuOpen: boolean = false;

  private sections: { id: string, route: string }[] = [
    { id: 'home', route: 'home' },
    { id: 'sobre', route: 'sobre' },
    { id: 'experiencia', route: 'experiencia' },
    { id: 'projetos', route: 'projetos' },
    { id: 'contato', route: 'contato' }
  ];

  private lastRoute: string = '';
  private scrollTimeout: any;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (this.menu && this.menu.nativeElement) {
      const clickedInside = this.menu.nativeElement.contains(event.target);
      const clickedOnToggle = (event.target as HTMLElement).closest('.icon-button');
      if (!clickedInside && this.menuOpen && !clickedOnToggle) {
        this.menuOpen = false;
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (this.menuOpen) {
      this.menuOpen = false;
    }

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.checkSectionInView(); 
    }, 100);
  }

  ngAfterViewInit(): void {
    this.checkSectionInView();
  }

  navigateTo(section: string): void {
    this.menuOpen = false;
    this.router.navigate([`/${section}`]).then(() => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  private checkSectionInView(): void {
    this.sections.forEach(section => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          if (this.lastRoute !== section.route) {
            this.router.navigate([`/${section.route}`]);
            this.lastRoute = section.route;
          }
        }
      }
    });
  }
}
