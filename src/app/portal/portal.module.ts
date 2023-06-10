import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortalRoutingModule } from './portal-routing.module';
import { SchoolService } from '../services/school.service';
import { PoliticPartyComponent } from './pages/politic-party/politic-party.component';
import { UsersComponent } from './pages/users/users.component';
import { StudentCRUDComponent } from './pages/student-crud/student-crud.component';
import { HomeComponent } from './pages/home/home.component';
import { IconsModule } from '../icons/icons.module';
import { ElectoralProcessCRUDComponent } from './pages/electoral-process-crud/electoral-process-crud.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentService } from '../services/student.service';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PoliticPartyComponent,
    UsersComponent,
    StudentCRUDComponent,
    ElectoralProcessCRUDComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PortalRoutingModule,
    HttpClientModule
  ],
  providers: [
    SchoolService,
    StudentService,
    UserService
  ]
})
export class PortalModule { }
