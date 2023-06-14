import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { UserService } from 'src/app/services/user.service';
import { StudentService } from 'src/app/services/student.service';
import { School } from 'src/app/models/school.model';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.scss']
})
export class StudentCRUDComponent implements OnInit {
  students: any[] = [];
  newStudent: any = {
    identifier:'',
    name: '',
    lastName: '',
    Age:'',
    dni: '',
    userId:'',
    classroomId: '' // Inicializar el objeto classroom
  };
  newStudents:any=[];
  newUser:any={
    email:'',
    password:''

  };
  School:School=new School();
  
  selectedClassrooms: number = 0;
  classroomsBySchool: any[] = [];
  
  constructor(private schoolService: SchoolService, 
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
  showStudentTableByclassRoomId(){
    
    this.getStudentByClassroomId(this.selectedClassrooms);
    
  }

  addStudent() {
    this.userService.createUser(this.newUser.email, this.newUser.password).subscribe({
      next: (responseUser: any) => {
        console.log('Response del servicio createUser:', responseUser);
        console.log('Response del servicio createUser id:', responseUser.resource.id);
  
        // Agregar el estudiante al arreglo students
        this.newStudents.push({
          identifier: this.newStudent.identifier,
          name: this.newStudent.name,
          lastName: this.newStudent.lastName,
          age: this.newStudent.age,
          dni: this.newStudent.dni,
          userId: responseUser.resource.id,
          classroomId: this.selectedClassrooms
        });
        console.log('student:', this.newStudents[0]);
        console.log('newStudents:', this.newStudent);
        this.studentService.createStudent(this.newStudents[0]).subscribe({
          next: (response: any) => {
            console.log('Respuesta de createStudent:', response);
  
            // Actualizar la lista de estudiantes con la respuesta del servidor
            this.getStudentByClassroomId(this.selectedClassrooms);
          },
          error: (error: any) => {
            console.log('Error al crear el estudiante:', error);
            
            
          }
        });
  
        // Limpiar el formulario
        this.newStudent = {};
        this.newUser = {};
      },
      error: (error: any) => {
        console.error('Error al crear el usuario:', error);
        alert(error.error.message);
      }
    });
  }
  
  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
