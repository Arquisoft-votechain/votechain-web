import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministratorsService{
  private apiUrl = environment.apiUrl + 'administrator';

  constructor(private http: HttpClient) { }

  createUser(email: string, password: string) {
    const url = `${this.apiUrl}`;
    const body = { email, password };
    return this.http.post(url, body); // Realiza la solicitud POST y devuelve el resultado
  }
  getAdministratorByUserId(userId:number){
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<any[]>(url); // Realiza la solicitud HTTP y devuelve el resultado

  }
}
