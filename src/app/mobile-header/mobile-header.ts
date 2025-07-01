import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-mobile-header',
   standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-header.html',
  styleUrl: './mobile-header.css'
})
export class MobileHeader {
  isOpen = false;

  navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Browse Caterers', href: '/caterers' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  closeMenu() {
    this.isOpen = false;
  }
}
