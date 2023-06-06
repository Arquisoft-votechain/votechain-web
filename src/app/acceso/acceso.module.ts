import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesoRoutingModule } from './acceso-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AccesoRoutingModule,
    IconsModule,
    FormsModule
  ]
})
export class AccesoModule { }
