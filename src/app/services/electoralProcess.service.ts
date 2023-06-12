import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElectoralProcess {
  private apiUrl = `${environment.apiUrl}/electoral-processes`;

  constructor(private http: HttpClient) { }
 
  createElectoralProcessesStudentRelation(electoralRrocessId:number,studentId:number) {
    const url = `${this.apiUrl}/${electoralRrocessId}/students/${studentId}`;
    return this.http.post(url, null); // Realiza la solicitud POST y devuelve el resultado
  }
  getStudentByElectoralProcessId(electoralProcessId: number) {
    const url = `${this.apiUrl}/${electoralProcessId}/students`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado
  }
 
  


}
