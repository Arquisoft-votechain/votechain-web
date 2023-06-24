

import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models/school.model';
import { ElectoralProcess } from 'src/app/services/electoralProcess.service';
import { SchoolService } from 'src/app/services/school.service';
import { StudentService } from 'src/app/services/student.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-electoral-process-student',
  templateUrl: './electoral-process-student.component.html',
  styleUrls: ['./electoral-process-student.component.css']
})

export class ElectoralProcessStudentComponent implements OnInit {
  
  studentsClassroom: any[] = [];
  studentsElectoralProcess:any[]=[];
  selectedStudentClassroomIds: number[] = [];
  selectedStudentElectoralProcessIds: number[] = [];

 
  school:School=new School();


  electoralProcessBySchool: any[]=[];
  selectedElectoralProcess:number=0;

  selectedClassrooms: number = 0;
  classroomsBySchool: any[] = [];
  sessionSchool:any;

 
 

  constructor(
    private schoolService: SchoolService,
    private studentService:StudentService,
    private electoralProcess:ElectoralProcess,
    private storageService:StorageService

  ) { }

  ngOnInit() {

    this.sessionSchool=this.storageService.getSchool();
    this.showLabelSchoolById(this.sessionSchool.id);
    this.showComboClassrromsBySchool(this.sessionSchool.id);
    this.showComboElectoralProcess(this.sessionSchool.id);
  }
  showLabelSchoolById(schoolId:number){
    this.getSchoolById(schoolId);

  }
  getSchoolById(schoolId: number) {
    this.schoolService.getSchoolById(schoolId).subscribe({
      next: (response: any) => {
   
        this.school = response.resource;
        console.log(this.school,"este es objeto");
      },
      error: (error: any) => {
        console.log('Error al obtener la escuela:', error);
      }
    });
  }
  getElectoralProcessBySchoolId(schoolId:number){
    this.schoolService.getElectoralProcessBySchoolId(schoolId).subscribe(
      {
        next:responseElectoralProcess=>{
          console.log(responseElectoralProcess,"electoralProcess by School");
          this.electoralProcessBySchool=responseElectoralProcess;

        },
        error:error=>{
          console.log('Error al obtener electoral process by shcool:', error);
        }
      }
    )

  }
  
  showComboElectoralProcess(schoolId:number){
    this.getElectoralProcessBySchoolId(schoolId);
  }

  showComboClassrromsBySchool(schoolId:number){
    this.getClassroomsBySchool(schoolId);
  }
  
  getClassroomsBySchool(schoolId: number) {
    this.schoolService.getClassRoomByIdSchool(schoolId).subscribe({
      next: response=>{
        this.classroomsBySchool = response;
      },
      error: error=>{
        console.log('Error al obtener los salones de clases del colegio:', error);
      }
    });
  }
 
  deleteProcess(index: number) {  
  }
  deleteStudentClassroom(index: number) {
    this.studentsClassroom.splice(index, 1);
  }
  deleteStudentElectoralProcess(index: number) {
    this.studentsElectoralProcess.splice(index, 1);
  }
  showStudentTableByclassRoomId(){
    
    this.getStudentByClassroomId(this.selectedClassrooms);
    this.selectedStudentClassroomIds=[];
    
  }
  getStudentByClassroomId(classroomId:number){
    this.studentService.getStudentByClassroomId(classroomId).subscribe({
      next:responseStudentsClassroom=>{
        console.log(responseStudentsClassroom,"studen by classroomId");
        this.studentsClassroom=responseStudentsClassroom;
        console.log(this.studentsClassroom,"studen by classroomId");
   
      },
      error: error=>{
        console.log('Error al obtener studiantes de classroomId:', error);

      }
      });
  }
  showStudentTableByElectoralProcessId(){
    
    
    this.getStudentByElectoralProcessId(this.selectedElectoralProcess);
    
    
  }

  getStudentByElectoralProcessId(electoralProcessId:number){
    this.electoralProcess.getStudentByElectoralProcessId(electoralProcessId).subscribe({
      next:responseStudentsElectoral=>{
        console.log(responseStudentsElectoral,"studen by classroomId");
        this.studentsElectoralProcess=responseStudentsElectoral;
        console.log(this.studentsElectoralProcess,"studen by classroomId");
   
      },
      error: error=>{
        console.log('Error al obtener studiantes de classroomId:', error);

      }
      });
  }

  handleCheckboxChangeClassroom(event: any, studentId: number) {
    if (event.target.checked) {
      // Checkbox marcado, agregar el ID del estudiante a la lista de IDs seleccionados
      this.selectedStudentClassroomIds.push(studentId);
    } else {
      // Checkbox desmarcado, eliminar el ID del estudiante de la lista de IDs seleccionados
      const index = this.selectedStudentClassroomIds.indexOf(studentId);
      if (index !== -1) {
        this.selectedStudentClassroomIds.splice(index, 1);
      }
    }
    
  }
  handleCheckboxChangeElectoralProcess(event: any, studentId: number) {
    if (event.target.checked) {
      // Checkbox marcado, agregar el ID del estudiante a la lista de IDs seleccionados
      this.selectedStudentElectoralProcessIds.push(studentId);
    } else {
      // Checkbox desmarcado, eliminar el ID del estudiante de la lista de IDs seleccionados
      const index = this.selectedStudentElectoralProcessIds.indexOf(studentId);
      if (index !== -1) {
        this.selectedStudentElectoralProcessIds.splice(index, 1);
      }
    }
    
  }
 

  addElectoralProcessStudentRelation() {


      this.selectedStudentClassroomIds.forEach(id => {
      this.electoralProcess.createElectoralProcessesStudentRelation(this.selectedElectoralProcess, id).subscribe({
        next: (responseElectoralProcessStudentRelation: any) => {
          console.log('Respuesta:', responseElectoralProcessStudentRelation);
          this.showStudentTableByElectoralProcessId();
        },
        error: (error: any) => {
          console.log('Error al crear el electoralStudentRelation:', error);
        }
      });
    });
  }
  
    
    
  
  


  
}
