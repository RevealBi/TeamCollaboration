import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RevealView, RVDashboard } from 'reveal-sdk';

@Component({
  selector: 'app-dashboard-viewer',
  templateUrl: './dashboard-viewer.component.html',
  styleUrls: ['./dashboard-viewer.component.scss']
})
export class DashboardViewerComponent implements OnInit {
  
  @ViewChild('reveal') el: ElementRef;
  private revealView: RevealView;

  constructor(private route: ActivatedRoute) {
  }

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    //uppercase the id so it matches the dashboard id on the server
    id = id[0].toUpperCase() + id.substring(1);

    RVDashboard.loadDashboard(id, (dashboard) => {
      this.revealView = new RevealView(this.el.nativeElement);
      this.revealView.canEdit = true;
      this.revealView.dashboard = dashboard;
    }, (err) => {
      console.error('revealView', err);
    });
  }
}
