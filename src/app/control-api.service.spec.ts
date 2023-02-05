import { TestBed } from '@angular/core/testing';

import { ControlApiService } from './control-api.service';

describe('ControlApiService', () => {
  let service: ControlApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
