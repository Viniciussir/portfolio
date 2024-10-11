import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-structured-box',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './structured-box.component.html',
  styleUrl: './structured-box.component.css'
})
export class StructuredBoxComponent implements OnInit {

  @Input() infoTitle: string = '';
  @Input() infoText: string = '';
  @Input() verticalText: string = '';
  @Input() direction: 'left' | 'right' = 'right';

  public isVisible = false;

  isMobile: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.checkIfMobile(window.innerWidth);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobile(event.target.innerWidth);
  }

  private checkIfMobile(width: number) {
    this.isMobile = width < 1024; 
    if (this.isMobile) {
      this.direction = 'right';
    }
  }
}
