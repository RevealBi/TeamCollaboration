import { Component } from '@angular/core';
import { MountainDarkTheme, RevealSdkSettings } from 'reveal-sdk';

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
    RevealSdkSettings.setBaseUrl("https://samples.revealbi.io/upmedia-backend/reveal-api/");
    RevealSdkSettings.theme = new MountainDarkTheme();
  }
}
