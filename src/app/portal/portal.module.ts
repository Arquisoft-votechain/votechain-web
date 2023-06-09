import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalRoutingModule } from './portal-routing.module';
import { PoliticPartyComponent } from './pages/politic-party/politic-party.component';
import { UsersComponent } from './pages/users/users.component';
import { StudentCRUDComponent } from './pages/student-crud/student-crud.component';
import { HomeComponent } from './pages/home/home.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SchoolService } from '../services/school.services';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ElectoralProcessCRUDComponent } from './pages/electoral-process-crud/electoral-process-crud.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



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
    IconsModule,
    FormsModule,
    PortalRoutingModule,
    HttpClientModule,
  ],
  providers: [
    SchoolService,
  ]
})
export class PortalModule { }
