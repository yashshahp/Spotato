import { TestBed } from '@angular/core/testing';

import { SpotateService } from './spotate.service';

describe('SpotateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotateService = TestBed.get(SpotateService);
    expect(service).toBeTruthy();
  });
});
