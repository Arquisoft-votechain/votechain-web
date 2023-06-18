import { Component, Input, OnInit } from '@angular/core'
import { PoliticalPartyParticipantService } from 'src/app/services/political-party-participant-service';
import { SchoolService } from 'src/app/services/school.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student-party-politic',
  templateUrl: './add-student-party-politic.component.html',
  styleUrls: ['./add-student-party-politic.component.css']
})
export class AddStudentPartyPoliticComponent implements OnInit {

  @Input() politicParty?: any;
  students: any[] = [];
  
  selectedClassrooms: number = 0;
  classroomsBySchool: any[] = [];

  constructor(
    private schoolService: SchoolService, 
    private studentService:StudentService,
    private politicalPartyParticipantService: PoliticalPartyParticipantService,
  ) { }

  ngOnInit() { 
    this.getClassroomsBySchool(2);
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

  showStudentTableByclassRoomId(){
    this.getStudentByClassroomId(this.selectedClassrooms);
  }

  addStudentParticipant() {
    this.politicalPartyParticipantService.postAssignStudentToPoliticalPartyParticipant(this.politicParty.id, 5).subscribe({
      next: response=>{
        console.log("Ingreso : ", response);
      },
      error: error=>{
        console.log('Error ingresar el estudiante', error);
      }
    });
  }

  printPRueba(){
    this.students.map(student => {
      this.politicalPartyParticipantService.postAssignStudentToPoliticalPartyParticipant(this.politicParty.id, student.id).subscribe(
        next => {
          console.log("Respuesta: ", next);
          console.log(this.politicParty.id, student.id);

        },
        error => console.log(error)
      );
    });
  }
}
