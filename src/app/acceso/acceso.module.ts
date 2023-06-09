import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesoRoutingModule } from './acceso-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { IconsModule } from '../icons/icons.module';
import { PoliticPartyComponent } from './component/politic-party/politic-party.component';
import { UsersComponent } from './component/users/users.component';
import { FormsModule } from '@angular/forms';
import { StudentCRUDComponent } from './component/student-crud/student-crud.component';
import { ElectoralProcessCRUDComponent } from './component/electoral-process-crud/electoral-process-crud.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SchoolService } from '../services/school.services';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PoliticPartyComponent,
    UsersComponent,
    StudentCRUDComponent,
    ElectoralProcessCRUDComponent,
    HomeComponent
    
  ],
  imports: [
    CommonModule,
    AccesoRoutingModule,
    IconsModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers:[
    SchoolService
  ]
})
export class AccesoModule { }
