import { Component, Input, OnInit } from '@angular/core';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';
import { StudentService } from 'src/app/services/student.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-student-party-politic',
  templateUrl: './add-student-party-politic.component.html',
  styleUrls: ['./add-student-party-politic.component.css']
})
export class AddStudentPartyPoliticComponent implements OnInit {

  @Input() politicParty?: any;
  School:School = new School();
  students: any[] = [];
  
  selectedClassrooms: number = 0;
  classroomsBySchool: any[] = [];

  constructor(
    private schoolService: SchoolService, 
    private userService: UserService,
    private studentService:StudentService
  ) { }

  ngOnInit() { 
    this.getClassroomsBySchool(2);
    this.getSchoolById(2);
   }

  getSchoolById(schoolId: number) {
    this.schoolService.getSchoolById(schoolId).subscribe({
      next: (response: any) => {
        console.log('Respuesta de getSchoolById:', response);
        this.School = response.resource;
        console.log(this.School,"este es objeto");
      },
      error: (error: any) => {
        console.log('Error al obtener la escuela:', error);
      }
    });
  }
  
  getClassroomsBySchool(schoolId: number) {
    this.schoolService.getClassRoomByIdSchool(schoolId).subscribe({
      next: response=>{
        this.classroomsBySchool = response;
        console.log(response,"classroom");
      },
      error: error=>{
        console.log('Error al obtener los salones de clases del colegio:', error);
      }
    });
  }

  getStudentByClassroomId(classroomId:number){
    this.studentService.getStudentByClassroomId(classroomId).subscribe({
      next:responseStudents=>{
        console.log(responseStudents,"studen by classroomId");
        this.students=responseStudents;
        console.log(this.students,"studen by classroomId");

      },
      error: error=>{
        console.log('Error al obtener studiantes de classroomId:', error);

      }
      });
      
    

  }
}
