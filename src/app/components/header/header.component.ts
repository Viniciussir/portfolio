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
export class HeaderComponent {

  @ViewChild('menu') menu!: ElementRef;

  currentDate: Date = new Date();

  menuOpen: boolean = false;

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
  }
  
}
