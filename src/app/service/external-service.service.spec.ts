import { TestBed } from '@angular/core/testing';

import { ExternalServiceService } from './external-service.service';

describe('ExternalServiceService', () => {
  let service: ExternalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
