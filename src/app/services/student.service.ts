import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = environment.apiUrl + 'student';

  constructor(private http: HttpClient) { }

  createStudent(studentData: any) {
    const url = `${this.apiUrl}`;
    return this.http.post(url, studentData); // Realiza la solicitud POST y devuelve el resultado
  }
  

  getStudentByClassroomId(id: number) {
    const url = `${this.apiUrl}/classroom/${id}`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado
  }
}


