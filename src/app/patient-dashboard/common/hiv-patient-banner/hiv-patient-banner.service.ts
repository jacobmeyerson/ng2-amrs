import { Injectable } from '@angular/core';
import { HivSummaryLatestComponent } from '../../hiv/hiv-summary/hiv-summary-latest.component';

@Injectable(
)
export class HivPatientBannerService {
  public david = 'whaddup';

  public eli;

  constructor() {}
  /*private hivSummaryLatestComponent: HivSummaryLatestComponent) {
  }*/

  public getHivInfo() {
    this.eli = 'filler'; // this.hivSummaryLatestComponent;
  }

}
