import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NucleoSectionComponent } from './nucleo-section.component';

describe('NucleoSectionComponent', () => {
  let component: NucleoSectionComponent;
  let fixture: ComponentFixture<NucleoSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NucleoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NucleoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
