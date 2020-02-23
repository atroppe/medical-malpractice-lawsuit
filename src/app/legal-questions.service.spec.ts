import { TestBed } from '@angular/core/testing';

import { LegalQuestionsService } from './legal-questions.service';

describe('LegalQuestionsService', () => {
  let service: LegalQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
