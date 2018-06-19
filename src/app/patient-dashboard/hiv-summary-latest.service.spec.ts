import { TestBed, inject } from '@angular/core/testing';

import { HivSummaryLatestService } from './hiv-summary-latest.service';

describe('HivSummaryLatestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HivSummaryLatestService]
    });
  });

  it('should be created', inject([HivSummaryLatestService], (service: HivSummaryLatestService) => {
    expect(service).toBeTruthy();
  }));
});
