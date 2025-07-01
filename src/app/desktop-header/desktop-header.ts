import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-desktop-header",
  standalone: true,
  imports: [RouterModule], // ✅ REQUIRED for routerLink to work
  templateUrl: "./desktop-header.html",
  styleUrl: "./desktop-header.css",
})
export class DesktopHeader {}
