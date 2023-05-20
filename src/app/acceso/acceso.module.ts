import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesoRoutingModule } from './acceso-routing.module';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AccesoRoutingModule
  ]
})
export class AccesoModule { }
