import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createStudent(studentData: any) {
    const url = `${this.apiUrl}/student`;
    return this.http.post(url, studentData); // Realiza la solicitud POST y devuelve el resultado
  }


  getStudentByClassRoomId(studentData: any) {
    const url = `${this.apiUrl}/student`;
    return this.http.post(url, studentData); // Realiza la solicitud POST y devuelve el resultado
  }
  getStudentByClassRoomI(id: number) {
    const url = `${this.apiUrl}/student/classroomId/${id}`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado
  }
}
