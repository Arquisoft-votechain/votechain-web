import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.scss']
})
export class StudentCRUDComponent implements OnInit {
  students: any[] = [];
  newStudent: any = {};

  constructor() { }

  ngOnInit() {
  }

  addStudent() {
    this.students.push(this.newStudent);
    this.newStudent = {};
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
