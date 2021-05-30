import { TestBed } from '@angular/core/testing';

import { CodeElementService } from './code-element.service';

describe('CodeElementService', () => {
  let service: CodeElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
