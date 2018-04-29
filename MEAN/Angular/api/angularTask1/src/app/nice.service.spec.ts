import { TestBed, inject } from '@angular/core/testing';

import { NiceService } from './nice.service';

describe('NiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NiceService]
    });
  });

  it('should be created', inject([NiceService], (service: NiceService) => {
    expect(service).toBeTruthy();
  }));
});
