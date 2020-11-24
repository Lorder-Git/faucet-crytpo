import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoConnectComponent } from './crypto-connect.component';

describe('CryptoConnectComponent', () => {
  let component: CryptoConnectComponent;
  let fixture: ComponentFixture<CryptoConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
