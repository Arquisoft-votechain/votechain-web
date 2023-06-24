import { Component,OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  schoolId:any;
  constructor(
    private sessionStorage:StorageService
    ) { }
 ngOnInit(): void {
   this.schoolId=this.sessionStorage.getSchool();
   console.log(this.sessionStorage.getAdministrator());
   console.log(this.schoolId.id);

 }


}
