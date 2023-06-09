import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { UserService } from 'src/app/services/user.service';
import { StudentService } from 'src/app/services/student.service';




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
  newUser:any={
    email:'',
    password:''

  };

 
  classrooms: any[] = [];
  classroomsBySchool: any[] = [];
  School: any = {
    id: '',
    name: '',
    success:''
  };
  


  constructor(private schoolService: SchoolService, 
              private userService: UserService,
              private studentService:StudentService
              ) { }


  ngOnInit() {
    
    this.getClassroomsBySchool(2);
    this.getSchoolById(2);
  }

  getSchoolById(schoolId: number) {
    this.schoolService.getSchoolById(schoolId).subscribe(
      (Response:any) => {
        
        console.log('Respuesta de getSchoolById:', Response);

          this.School = Response.resource;
          console.log(this.School);
        
      },
      error => {
        console.log('Error al obtener la escuela:', error);
      }
    );
  }
  

  getClassroomsBySchool(schoolId: number) {
    this.schoolService.getClassRoomByIdSchool(schoolId).subscribe(
      Response => {
        this.classroomsBySchool = Response;
      },
      error => {
        console.log('Error al obtener los salones de clases del colegio:', error);
      }
    );
  }

  addStudent() {
    this.userService.createUser(this.newUser.email, this.newUser.password).subscribe(
      (response: any) => {
        console.log('Response del servicio createUser:', response);
        console.log('Response del servicio createUser id :', response.resource.id);
  
        // Agregar el estudiante al arreglo students
        this.students.push({
          identifier: this.newStudent.identifier,
          name: this.newStudent.name,
          lastName: this.newStudent.lastName,
          age: this.newStudent.age,
          dni: this.newStudent.dni,
          userId: response.resource.id,
          classroomId: this.classroomsBySchool 
        });
        console.log('student :', this.students[0]);
        console.log('newStudent :', this.newStudent);
        this.studentService.createStudent(this.students[0]).subscribe(
          (response: any) => {
            console.log('Respuesta de createStudent:', response);
    
            // Actualizar la lista de estudiantes con la respuesta del servidor
            this.students.push(response.resource);
    
            // Restablecer el formulario
            this.newStudent = {};
          },
          error => {
            console.log('Error al crear el estudiante:', error);
          }
        );
  
        // Limpiar el formulario
        this.newStudent = {};
        this.newUser = {};
      },
      error => {
        console.error('Error al crear el usuario:', error);
      }
    );
  }
  

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
