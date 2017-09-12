import { TestBed, inject } from '@angular/core/testing';

import { DocumentClassificationService } from './document-classification.service';

describe('DocumentClassificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentClassificationService]
    });
  });

  it('should be created', inject([DocumentClassificationService], (service: DocumentClassificationService) => {
    expect(service).toBeTruthy();
  }));
});
