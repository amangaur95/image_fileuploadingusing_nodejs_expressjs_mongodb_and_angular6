import { TestBed, inject } from '@angular/core/testing';

import { ShowimageService } from './showimage.service';

describe('ShowimageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowimageService]
    });
  });

  it('should be created', inject([ShowimageService], (service: ShowimageService) => {
    expect(service).toBeTruthy();
  }));
});
