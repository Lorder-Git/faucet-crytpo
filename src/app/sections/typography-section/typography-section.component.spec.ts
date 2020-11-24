import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TypographySectionComponent } from './typography-section.component';

describe('TypographySectionComponent', () => {
  let component: TypographySectionComponent;
  let fixture: ComponentFixture<TypographySectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
