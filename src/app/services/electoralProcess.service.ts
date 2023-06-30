import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElectoralProcess {
  private apiUrl = `${environment.apiUrl}electoral-processes`;
  private apiUrl2 = `${environment.apiUrl}master-political-parties`;

  constructor(private http: HttpClient) { }
 
  createElectoralProcessesStudentRelation(electoralRrocessId:number,studentId:number) {
    const url = `${this.apiUrl}/${electoralRrocessId}/students/${studentId}`;
    return this.http.post(url, null); // Realiza la solicitud POST y devuelve el resultado
  }
  createElectoralProcessesPoliticPartyRelation(partyPoliticId:number,electoralPreocessId:number,data: any) {
    const url = `${this.apiUrl2}/${partyPoliticId}/political-party-participant?electoral_process_id=${electoralPreocessId}`;
    return this.http.post(url, data); // Realiza la solicitud POST y devuelve el resultado
  }



  getStudentByElectoralProcessId(electoralProcessId: number) {
    const url = `${this.apiUrl}/${electoralProcessId}/students`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado
  }
 
  getPoliticalPartyParticipantVotesByElectoralProcessId(electoralProcessId: number) {
    const url = `${this.apiUrl}/${electoralProcessId}/political-party-participants/votes`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado
  }

  getPoliticalPartyParticipantByElectoralProcessId(electoralProcessId: number) {
    const url = `${this.apiUrl}/${electoralProcessId}/political-party-participants`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado
  }






}
