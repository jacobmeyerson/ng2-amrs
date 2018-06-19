import { Component, OnInit } from '@angular/core';

import { PatientService } from '../../services/patient.service';
import { HivSummaryService } from './hiv-summary.service';
import { Patient } from '../../../models/patient.model';
import { Subscription } from 'rxjs';

import { HivSummaryLatestService } from '../../hiv-summary-latest.service';

@Component({
  selector: 'hiv-summary-latest',
  templateUrl: './hiv-summary-latest.component.html',
  styleUrls: ['./hiv-summary.component.css'],
  providers: [HivSummaryLatestService]
})
export class HivSummaryLatestComponent implements OnInit {
  public loadingHivSummary: boolean = false;
  public hivSummary: any;
  public subscription: Subscription;
  public patient: Patient;
  public patientUuid: any;
  public errors: any = [];

  constructor(private hivSummaryLatestService: HivSummaryLatestService) {}

  public ngOnInit() {
    this.getHivSummary();
  }

  private getHivSummary() {
    this.loadingHivSummary = this.hivSummaryLatestService.loadingHivSummary;
    this.hivSummary = this.hivSummaryLatestService.hivSummary;
  }
}
