import { TestBed } from '@angular/core/testing';

import { UseBackendService } from './use-backend.service';

describe('UseBackendService', () => {
  let service: UseBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
