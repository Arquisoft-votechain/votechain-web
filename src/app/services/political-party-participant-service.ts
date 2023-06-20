import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoliticalPartyParticipantService {
  private apiUrl = environment.apiUrl + 'political-party-participants';

  constructor(private http: HttpClient) { }

  postAssignStudentToPoliticalPartyParticipant(politicalPartyId: number, studentId: number) {
    return this.http.post<any>(this.apiUrl+ `/${politicalPartyId}/students/${studentId}`, null);
  }
}
