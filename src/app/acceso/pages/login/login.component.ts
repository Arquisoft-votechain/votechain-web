import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userIdrpt: any;
  credential:any = {
    email:'aguanta@gmail.com',
    password:'123456'
  }
  ngOnInit(): void {
    
  }
  

  constructor(private router: Router,
    private sessionStorage:StorageService,
    private userService:UserService,
    ) { }

  onSubmit() {
    // Realiza las validaciones del formulario aquí
    this.login();
  }
  login(){

    this.getUserId(this.credential.email,this.credential.password);
  }

  getUserId(email: string, password: string){
    this.userService.verifyUser(email,password).subscribe({
      next:(responseUser:any)=>{

        if(responseUser.success!="false" && responseUser>0) {
        console.log(responseUser,"UserId bota tu Gaa");
        this.userIdrpt=responseUser;
        this.sessionStorage.SaveAdministratorAndSchool(this.userIdrpt);
         // Si el formulario es válido, redirecciona a la ruta deseada
         this.router.navigate(['/portal/home']);

        }else{
          alert("contraseña invalida");
        }

      },
      error: (error:any)=>{
        console.log('Error al obtener userId:', error);

      }
      });
  }
    






}
