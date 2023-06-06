import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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
