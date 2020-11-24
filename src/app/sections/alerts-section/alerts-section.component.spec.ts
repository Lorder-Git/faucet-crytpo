import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertsSectionComponent } from './alerts-section.component';

describe('AlertsSectionComponent', () => {
  let component: AlertsSectionComponent;
  let fixture: ComponentFixture<AlertsSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
