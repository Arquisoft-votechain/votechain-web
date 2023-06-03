import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  responsiveMenu: any;
  responsiveContent: any;
  isDropdownOpen = false;

  openNav() {
    if (!this.isDropdownOpen) {
      this.responsiveMenu = { 'display': 'block' };
      this.responsiveContent = { 'margin-left': '150px' };
    } else {
      this.responsiveMenu = { 'display': null };
      this.responsiveContent = { 'margin-left': null };
    }
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
