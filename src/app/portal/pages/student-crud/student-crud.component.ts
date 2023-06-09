
import { SchoolService } from 'src/app/services/school.services';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.scss']
})
export class StudentCRUDComponent implements OnInit {
  students: any[] = [];
  newStudent: any = {};
  schools: any[] = [];

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.getSchools();
  }
  getSchools() {
    this.schoolService.getSchools().subscribe(
      Response => {
        this.schools = Response;
      },
      error => {
        console.log('Error al obtener los colegios:', error);
      }
    );
  }

  addStudent() {
    this.students.push(this.newStudent);
    this.newStudent = {};
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
