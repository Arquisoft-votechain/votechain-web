import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = 'http://localhost:3000';

  private apiUrl2 = 'http://localhost:3000/schools/{id}/classrooms';
  private apiMasterPoliticalParties = 'http://localhost:3000/schools/';
  constructor(private http: HttpClient) { }


  
  getSchoolById(id:number){
    const url = `${this.apiUrl}/schools/${id}`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado

  }
  getClassRoomByIdSchool(id: number) {
    const url = `${this.apiUrl}/schools/${id}/classrooms`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado
  }

  getPoliticalParties(id: number) {
    return this.http.get<any[]>(this.apiMasterPoliticalParties + `${id}/master-political-parties`);
  }

  postPoliticalParties(id: number, politicalParty:any) {
    return this.http.post<any>(this.apiMasterPoliticalParties+ `${id}/master-political-parties`, politicalParty);
  }
}
