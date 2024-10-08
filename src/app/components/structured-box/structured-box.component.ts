import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, input } from '@angular/core';

@Component({
  selector: 'app-structured-box',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './structured-box.component.html',
  styleUrl: './structured-box.component.css'
})
export class StructuredBoxComponent {

  @Input() infoText: string = '';
  @Input() verticalText: string = '';
  @Input() direction: 'left' | 'right' = 'right';

  public isVisible = false;

  constructor(private el: ElementRef) {}

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
