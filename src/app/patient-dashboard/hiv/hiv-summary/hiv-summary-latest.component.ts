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
  public hivSummary: any;
  public subscriptionComp: Subscription;

  constructor(private hivSummaryLatestService: HivSummaryLatestService) {}

  public ngOnInit() {
    this.getHivSummary();
  }

  private getHivSummary() {
    // console.log(this.loadingHivSummary);
    // this.hivSummaryLatestService.getPatient();
    // this.hivSummary = this.hivSummaryLatestService.hivSummary;
    // console.log(this.loadingHivSummary);
    // console.log(this.hivSummary);
    // console.log(this.patient);
    // this.subscriptionComp = 
    setTimeout(function() {
      this.hivSummary = this.hivSummaryLatestService.hivSummary; },
      7000);
    console.log(this.hivSummary);
  }
}
