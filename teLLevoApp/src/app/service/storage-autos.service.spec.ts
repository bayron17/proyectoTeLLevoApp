import { TestBed } from '@angular/core/testing';

import { StorageAutosService } from './storage-autos.service';

describe('StorageAutosService', () => {
  let service: StorageAutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageAutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
