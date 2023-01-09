import { TestBed } from '@angular/core/testing';

import { TypeLogementService } from './type-logement.service';

describe('TypeLogementService', () => {
  let service: TypeLogementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeLogementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
