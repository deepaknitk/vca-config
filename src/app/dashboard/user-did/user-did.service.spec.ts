import { TestBed, inject } from '@angular/core/testing';

import { UserDidService } from './user-did.service';

describe('UserDidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDidService]
    });
  });

  it('should be created', inject([UserDidService], (service: UserDidService) => {
    expect(service).toBeTruthy();
  }));
});
