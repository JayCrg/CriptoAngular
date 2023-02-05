import { TestBed } from '@angular/core/testing';

import { ControlDataBaseService } from './control-data-base.service';

describe('ControlDataBaseService', () => {
  let service: ControlDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
