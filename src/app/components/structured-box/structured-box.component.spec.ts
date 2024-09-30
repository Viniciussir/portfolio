import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredBoxComponent } from './structured-box.component';

describe('StructuredBoxComponent', () => {
  let component: StructuredBoxComponent;
  let fixture: ComponentFixture<StructuredBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuredBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuredBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
