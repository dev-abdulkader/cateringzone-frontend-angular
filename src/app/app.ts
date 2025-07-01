import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopHeader } from './desktop-header/desktop-header';
import { MobileHeader } from './mobile-header/mobile-header';
import { FooterComponent } from './footer/footer';

import { FormsModule } from '@angular/forms';  // <-- import FormsModule here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DesktopHeader, MobileHeader, FooterComponent, FormsModule], // <-- add here
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'catering_frontend_angular';
}
