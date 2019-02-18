import { TestBed } from '@angular/core/testing';

import { MachinesUsersServiceService } from './machines-users-service.service';

describe('MachinesUsersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MachinesUsersServiceService = TestBed.get(MachinesUsersServiceService);
    expect(service).toBeTruthy();
  });
});
