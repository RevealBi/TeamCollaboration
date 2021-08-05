import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RevealDashboardThumbnailView } from 'reveal-sdk';
import { Constants } from '../Constants';

@Component({
  selector: 'app-dashboard-thumbnail',
  templateUrl: './dashboard-thumbnail.component.html',
  styleUrls: ['./dashboard-thumbnail.component.scss']
})
export class DashboardThumbnailComponent implements OnInit {
  @ViewChild('revealThumbnail') el: ElementRef;
  private revealThumbnail: RevealDashboardThumbnailView;
  @Input() public dashboardId: string = "";
  constructor() { }

  ngOnInit(): void {
    console.log("DashboardId: " + this.dashboardId);
    console.log(Constants.baseServerUrl + `DashboardInfos/${this.dashboardId}`);
    fetch(Constants.baseServerUrl + `DashboardInfos/${this.dashboardId}`)
      .then(data => data.json())
      .then(json => {
        this.revealThumbnail = new RevealDashboardThumbnailView(this.el.nativeElement)
        console.log(json);
        this.revealThumbnail.dashboardInfo = json.info;
      });
  };
}
