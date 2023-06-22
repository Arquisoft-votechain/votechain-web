import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = environment.apiUrl + 'schools';

  constructor(private http: HttpClient) { }

  getSchoolById(id:number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado

  }
  getClassRoomByIdSchool(id: number) {
    const url = `${this.apiUrl}/${id}/classrooms`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado
  }

  getPoliticalParties(id: number) {
    return this.http.get<any[]>(this.apiUrl + `/${id}/master-political-parties`);
  }

  postPoliticalParties(id: number, politicalParty:any) {
    return this.http.post<any>(this.apiUrl+ `/${id}/master-political-parties`, politicalParty);
  }

  createElectoralProcesses(electoralProcesstData: any,schoolId:number) {
    const url = `${this.apiUrl}/${schoolId}/electoral-processes`;
    return this.http.post(url, electoralProcesstData); // Realiza la solicitud POST y devuelve el resultado
  }
  
  getElectoralProcessBySchoolId(schoolId:number){
    const url = `${this.apiUrl}/${schoolId}/electoral-processes`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado
  }

  getElectoralProcessCountVotesBySchoolId(schoolId:number){
    const url = `${this.apiUrl}/${schoolId}/electoral-processes/votes`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado
  }
}
