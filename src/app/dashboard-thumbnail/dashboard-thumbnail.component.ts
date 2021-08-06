import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RevealDashboardThumbnailView } from 'reveal-sdk';

@Component({
  selector: 'app-dashboard-thumbnail',
  templateUrl: './dashboard-thumbnail.component.html',
  styleUrls: ['./dashboard-thumbnail.component.scss']
})
export class DashboardThumbnailComponent implements OnInit {
  
  @ViewChild('revealThumbnail') el: ElementRef;
  private revealThumbnail: RevealDashboardThumbnailView;
  @Input() 
  public info: any;

  constructor() { }

  ngOnInit(): void {    
  };
  
  ngAfterViewInit(): void {
    this.revealThumbnail = new RevealDashboardThumbnailView(this.el.nativeElement)
    this.revealThumbnail.dashboardInfo = this.info;
  }
}
