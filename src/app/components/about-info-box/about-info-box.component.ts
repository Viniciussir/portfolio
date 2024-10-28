import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-info-box',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about-info-box.component.html',
  styleUrl: './about-info-box.component.css'
})
export class AboutInfoBoxComponent implements OnInit {

  @Input() infoTitle: string = '';
  @Input() infoText: string = '';
  @Input() infoOptional?: string = '';
  @Input() marginOptional?: string = '';
  @Input() verticalText: string = '';
  @Input() direction: 'left' | 'right' = 'right';

  public isVisible = false;

  isMobile: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
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
}
