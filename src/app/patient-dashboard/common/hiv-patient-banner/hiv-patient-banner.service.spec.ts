import { TestBed, inject } from '@angular/core/testing';

import { HivPatientBannerService } from './hiv-patient-banner.service';

describe('HivPatientBannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HivPatientBannerService]
    });
  });

  it('should be created', inject([HivPatientBannerService], (service: HivPatientBannerService) => {
    expect(service).toBeTruthy();
  }));
});
