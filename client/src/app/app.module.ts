import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { IgxBadgeModule, IgxListModule, IgxIconModule, IgxButtonModule, IgxAvatarModule, IgxCalendarModule, IgxCardModule, IgxDropDownModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashboardViewerComponent } from './dashboard-viewer/dashboard-viewer.component';
import { DashboardThumbnailComponent } from './dashboard-thumbnail/dashboard-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    DashboardsComponent,
    DashboardViewerComponent,
    DashboardThumbnailComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxBadgeModule,
    IgxListModule,
    IgxIconModule,
    IgxButtonModule,
    IgxAvatarModule,
    IgxCalendarModule,
    FormsModule,
    IgxCardModule,
    IgxDropDownModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
