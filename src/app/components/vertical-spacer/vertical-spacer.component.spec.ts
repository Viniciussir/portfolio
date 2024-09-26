import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSpacerComponent } from './vertical-spacer.component';

describe('VerticalSpacerComponent', () => {
  let component: VerticalSpacerComponent;
  let fixture: ComponentFixture<VerticalSpacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalSpacerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalSpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
