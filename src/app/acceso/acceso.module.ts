import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesoRoutingModule } from './acceso-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { SchoolService } from '../services/school.service';




@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AccesoRoutingModule,
    IconsModule,
    FormsModule
   
  ],
  providers:[
    StorageService,
    SchoolService
  ]
})
export class AccesoModule { }
