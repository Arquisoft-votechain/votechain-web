import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortalRoutingModule } from './portal-routing.module';
import { SchoolService } from '../services/school.services';
import { PoliticPartyComponent } from './pages/politic-party/politic-party.component';
import { UsersComponent } from './pages/users/users.component';
import { StudentCRUDComponent } from './pages/student-crud/student-crud.component';
import { ElectoralProcessCRUDComponent } from './pages/electoral-process-crud/electoral-process-crud.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    PoliticPartyComponent,
    UsersComponent,
    StudentCRUDComponent,
    ElectoralProcessCRUDComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PortalRoutingModule
  ],
  providers: [
    SchoolService
  ]
})
export class PortalModule { }
