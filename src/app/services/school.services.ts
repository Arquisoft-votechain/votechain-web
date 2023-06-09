import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = 'http://localhost:3000/schools';
  private apiUrl2 = 'http://localhost:3000/schools/{id}/classrooms';
  private apiMasterPoliticalParties = 'http://localhost:3000/schools/';

  constructor(private http: HttpClient) { }

  getSchools() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getClassRoomByIdSchool(id: number) {
    const url = `${this.apiUrl}/${id}/classrooms`; // Construir la URL correcta
    return this.http.get<any[]>(url);
  }

  getPoliticalParties(id: number) {
    return this.http.get<any[]>(this.apiMasterPoliticalParties + `${id}/master-political-parties`);
  }

  postPoliticalParties(id: number, politicalParty:any) {
    return this.http.post<any>(this.apiMasterPoliticalParties+ `${id}/master-political-parties`, politicalParty);
  }
  
}
