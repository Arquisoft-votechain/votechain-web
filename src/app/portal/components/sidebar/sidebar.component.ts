import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  responsiveMenu: any;
  responsiveContent: any;
  isDropdownOpen1 = false;
  isDropdownOpen2 = false;
  isDropdownOpen3 = false;

  openNav() {
    if (!this.isDropdownOpen1) {
      this.responsiveMenu = { 'display': 'block' };
      this.responsiveContent = { 'margin-left': '150px' };
    }
    if (!this.isDropdownOpen2) {
      this.responsiveMenu = { 'display': 'block' };
      this.responsiveContent = { 'margin-left': '150px' };
    }
    if (!this.isDropdownOpen3) {
      this.responsiveMenu = { 'display': 'block' };
      this.responsiveContent = { 'margin-left': '150px' };
    } else {
      this.responsiveMenu = { 'display': null };
      this.responsiveContent = { 'margin-left': null };
    }
    this.isDropdownOpen1 = !this.isDropdownOpen1;
    this.isDropdownOpen2 = !this.isDropdownOpen2;
    this.isDropdownOpen3 = !this.isDropdownOpen3;
  }

  toggleDropdown1(event: Event) {
    event.preventDefault();
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }
  toggleDropdown2(event: Event) {
    event.preventDefault();
    this.isDropdownOpen2 = !this.isDropdownOpen2;
  }
  toggleDropdown3(event: Event) {
    event.preventDefault();
    this.isDropdownOpen3 = !this.isDropdownOpen3;
  }
}
