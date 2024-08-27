import { TestBed } from '@angular/core/testing';

import { MkFormService } from './mk-form.service';

describe('MkFormService', () => {
  let service: MkFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MkFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
