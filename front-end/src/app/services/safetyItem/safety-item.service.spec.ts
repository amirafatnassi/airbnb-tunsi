import { TestBed } from '@angular/core/testing';

import { SafetyItemService } from './safety-item.service';

describe('SafetyItemService', () => {
  let service: SafetyItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafetyItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
