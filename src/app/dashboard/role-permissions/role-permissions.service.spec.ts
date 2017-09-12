import { TestBed, inject } from '@angular/core/testing';

import { RolePermissionsService } from './role-permissions.service';

describe('RolePermissionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolePermissionsService]
    });
  });

  it('should be created', inject([RolePermissionsService], (service: RolePermissionsService) => {
    expect(service).toBeTruthy();
  }));
});
