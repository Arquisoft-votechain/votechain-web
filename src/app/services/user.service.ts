import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createUser(email: string, password: string) {
    const url = `${this.apiUrl}/user`;
    const body = { email, password };
    return this.http.post(url, body); // Realiza la solicitud POST y devuelve el resultado
  }
}
