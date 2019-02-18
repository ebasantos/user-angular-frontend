import { TestBed } from '@angular/core/testing';

import { MachineServiceService } from './machine-service.service';

describe('MachineServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MachineServiceService = TestBed.get(MachineServiceService);
    expect(service).toBeTruthy();
  });
});
