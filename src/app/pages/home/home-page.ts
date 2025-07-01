// home-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero';
import { CategoriesComponent } from '../../categories/categories';
import { CateringHelpComponent } from '../../catering-help/catering-help';
import { JoinUsComponent } from '../../join-us/join-us';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    CategoriesComponent,
    CateringHelpComponent,
    JoinUsComponent,
  ],
  templateUrl: './home-page.html',
})
export class HomePageComponent {}
