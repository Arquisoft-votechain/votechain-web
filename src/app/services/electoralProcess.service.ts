import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectoralProcess {
  private apiUrl = 'http://localhost:3000';

 
  constructor(private http: HttpClient) { }


 
  createElectoralProcessesStudentRelation(electoralRrocessId:number,studentId:number) {
    const url = `${this.apiUrl}/electoral-processes/${electoralRrocessId}/students/${studentId}`;
    return this.http.post(url, null); // Realiza la solicitud POST y devuelve el resultado
  }
  getStudentByElectoralProcessId(electoralProcessId: number) {
    const url = `${this.apiUrl}/electoral-processes/${electoralProcessId}/students`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado
  }
 
  


}
