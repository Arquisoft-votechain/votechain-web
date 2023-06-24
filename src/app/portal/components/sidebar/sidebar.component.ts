import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  school:any;
  admi:any;
  showAdmi:any;
  constructor(
    private sessionStorage:StorageService
    
    ) { }
  ngOnInit(): void {
  this.school=this.sessionStorage.getSchool();
  this.admi=this.sessionStorage.getAdministrator();
  
  if (this.school && this.admi) {
    this.showAdmi = "ADMINISTRATOR: " + this.admi.name + " " + this.admi.lastName + "//SCHOOL: " + this.school.name;
  } else {
    // Manejo del caso en que school o admi sean null
    this.showAdmi = "ADMINISTRATOR: No disponible // SCHOOL: No disponible";
  }

  
  }

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
