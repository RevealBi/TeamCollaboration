import { Component } from '@angular/core';
import { MountainDarkTheme, RevealSdkSettings } from 'reveal-sdk';
import { Constants } from './Constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.setupReveal();
  }

  setupReveal() {
    RevealSdkSettings.setBaseUrl(Constants.baseServerUrl);
    RevealSdkSettings.theme = new MountainDarkTheme();
  }
}
