import { Component, OnInit } from '@angular/core';
/*import { PatientService } from '../../services/patient.service';
import { HivSummaryService } from '../../hiv/hiv-summary/hiv-summary.service';
import { Patient } from '../../../models/patient.model';
import { Subscription } from 'rxjs';
*/
// import { HivSummaryLatestComponent } from '../../hiv/hiv-summary/hiv-summary-latest.component';
// import { HivPatientBannerService } from './hiv-patient-banner.service';

@Component({
  selector: 'hiv-patient-banner',
  templateUrl: './hiv-patient-banner.component.html',
  styleUrls: ['./hiv-patient-banner.component.css'],
  providers: []
})
export class HivPatientBannerComponent implements OnInit {
  public bob;
  public toggle: boolean = false;

  constructor() {}

  public buttonClick() {
    this.toggle = !this.toggle;
  }

  public ngOnInit() {
    this.getHivInfo();
  }

  private getHivInfo() {
    this.bob = 'hi'; // this.hivPatientBannerService.getHivInfo();
  }

}
