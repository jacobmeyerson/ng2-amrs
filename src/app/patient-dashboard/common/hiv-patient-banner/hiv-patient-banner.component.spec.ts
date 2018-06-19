import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HivPatientBannerComponent } from './hiv-patient-banner.component';

describe('HivPatientBannerComponent', () => {
  let component: HivPatientBannerComponent;
  let fixture: ComponentFixture<HivPatientBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HivPatientBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HivPatientBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
