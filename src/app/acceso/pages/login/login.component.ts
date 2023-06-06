import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  onSubmit() {
    // Realiza las validaciones del formulario aquí
  
    // Si el formulario es válido, redirecciona a la ruta deseada
    this.router.navigate(['/portal/home']);
  }
}
