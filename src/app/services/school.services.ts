import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = 'http://localhost:3000/schools';
 

  constructor(private http: HttpClient) { }

  getSchools() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getClassRoomByIdSchool(id: number) {
    const url = `${this.apiUrl}/${id}/classrooms`;
  }
  
  
}
