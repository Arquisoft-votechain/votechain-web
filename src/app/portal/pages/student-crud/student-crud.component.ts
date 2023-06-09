import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.services';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.scss']
})
export class StudentCRUDComponent implements OnInit {
  students: any[] = [];
  newStudent: any = {};
  schools: any[] = [];
  classrooms: any[] = [];

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.getSchools();
  }

  getSchools() {
    this.schoolService.getSchools().subscribe({
      next: (response: any[]) => {
        this.schools = response;
      },
      error: (error: any) => {
        console.log('Error al obtener los colegios:', error);
      }
    });
  }

  getClassroomsForSchool(schoolId: number) {
    this.schoolService.getClassRoomByIdSchool(schoolId).subscribe({
      next: (response: any[]) => {
        this.classrooms = response;
      },
      error: (error: any) => {
        console.log('Error al obtener los classrooms:', error);
      }
    });
  }

  addStudent() {
    this.students.push(this.newStudent);
    this.newStudent = {};
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
