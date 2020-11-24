import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularSectionComponent } from './angular-section.component';

describe('AngularSectionComponent', () => {
  let component: AngularSectionComponent;
  let fixture: ComponentFixture<AngularSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
