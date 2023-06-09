import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortalRoutingModule } from './portal-routing.module';
import { SchoolService } from '../services/school.service';
import { PoliticPartyComponent } from './pages/politic-party/politic-party.component';
import { UsersComponent } from './pages/users/users.component';
import { StudentCRUDComponent } from './pages/student-crud/student-crud.component';
import { HomeComponent } from './pages/home/home.component';
import { ElectoralProcessCRUDComponent } from './pages/electoral-process-crud/electoral-process-crud.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentService } from '../services/student.service';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ElectoralProcessStudentComponent } from './pages/electoral-process-student/electoral-process-student.component';
import { ElectoralProcess } from '../services/electoralProcess.service';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { StatisticsService } from '../services/statistics.service';
import { IconsModule } from '../icons/icons.module';
import { AddStudentPartyPoliticComponent } from './pages/add-student-party-politic/add-student-party-politic.component';
import { StorageService } from '../services/storage.service';
import { ElectoralProcessPartyComponent } from './pages/electoral-process-party/electoral-process-party/electoral-process-party.component';



@NgModule({
  declarations: [
    PoliticPartyComponent,
    UsersComponent,
    StudentCRUDComponent,
    ElectoralProcessCRUDComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    ElectoralProcessStudentComponent,
    StatisticsComponent,
    AddStudentPartyPoliticComponent,
    ElectoralProcessPartyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PortalRoutingModule,
    HttpClientModule,
    IconsModule,
  ],
  providers: [
    SchoolService,
    StudentService,
    UserService,
    ElectoralProcess,
    StatisticsService,
    DatePipe,
    StorageService
  ]
})
export class PortalModule { }
