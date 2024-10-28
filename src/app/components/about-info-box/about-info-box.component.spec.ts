import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInfoBoxComponent } from './about-info-box.component';

describe('StructuredBoxComponent', () => {
  let component: AboutInfoBoxComponent;
  let fixture: ComponentFixture<AboutInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutInfoBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
