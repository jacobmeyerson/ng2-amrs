import { Component, OnInit } from '@angular/core';
/*import { PatientService } from '../../services/patient.service';
import { HivSummaryService } from '../../hiv/hiv-summary/hiv-summary.service';
import { Patient } from '../../../models/patient.model';
import { Subscription } from 'rxjs';
*/
// import { HivSummaryLatestComponent } from '../../hiv/hiv-summary/hiv-summary-latest.component';
import { HivPatientBannerService } from './hiv-patient-banner.service';

@Component({
  selector: 'hiv-patient-banner',
  templateUrl: './hiv-patient-banner.component.html',
  styleUrls: ['./hiv-patient-banner.component.css'],
  providers: [HivPatientBannerService]
})
export class HivPatientBannerComponent implements OnInit {
  public bob;
  public toggle: boolean = false;

  constructor(private hivPatientBannerService: HivPatientBannerService) {}

  public buttonClick() {
    this.toggle = !this.toggle;
  }

  public ngOnInit() {
    this.getHivInfo();
  }

  private getHivInfo() {
    this.bob = this.hivPatientBannerService.getHivInfo();
  }

}

/*  



public loadingHivSummary: boolean = false;
  public hivSummary: any;
  public subscription: Subscription;
  public patient: Patient;
  public patientUuid: any;
  public errors: any = [];

  constructor(private hivSummaryService: HivSummaryService,
              private patientService: PatientService) {}

  public ngOnInit() {
    this.getPatient();
  }

  public getPatient() {
    this.loadingHivSummary = true;
    this.subscription = this.patientService.currentlyLoadedPatient.subscribe(
      (patient) => {
        if (patient) {
          this.patient = patient;
          this.patientUuid = this.patient.person.uuid;
          this.loadHivSummary(this.patientUuid);
        }
      }, (err) => {
        this.loadingHivSummary = false;
        this.errors.push({
          id: 'patient',
          message: 'error fetching patient'
        });
      });
  }

  public loadHivSummary(patientUuid) {
    this.hivSummaryService.getHivSummary(
      patientUuid, 0, 1, false)
      .subscribe((data) => {
        if (data) {

          for (let summary of data){

            // check if encounter is clinical
            if ( summary.is_clinical_encounter === 1) {

             this.hivSummary = summary;
             break;

          }

         }

        }
        this.loadingHivSummary = false;
      }, (err) => {
        this.loadingHivSummary = false;
        this.errors.push({
          id: 'Hiv Summary',
          message: 'An error occured while loading Hiv Summary. Please try again.'
        });
      });
  }
} */
