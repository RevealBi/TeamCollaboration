import { Component, OnInit } from '@angular/core';
import { IDashboardInfo } from '../business/IDashboardInfo';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {
  
  dashboards: IDashboardInfo[];

  constructor(private dashboardService: DashboardService){

  }

  ngOnInit(): void {
    this.dashboardService.getDashboards().subscribe(data => {
      this.dashboards = data;
    });
  }
}
