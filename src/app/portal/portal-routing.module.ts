import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticPartyComponent } from './pages/politic-party/politic-party.component';
import { StudentCRUDComponent } from './pages/student-crud/student-crud.component';
import { ElectoralProcessCRUDComponent } from './pages/electoral-process-crud/electoral-process-crud.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ElectoralProcessStudentComponent } from './pages/electoral-process-student/electoral-process-student.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ElectoralProcessPartyComponent } from './pages/electoral-process-party/electoral-process-party/electoral-process-party.component';

const routes: Routes = [
  {path: 'politic-party', component: PoliticPartyComponent },
  {path: 'student', component: StudentCRUDComponent },
  {path: 'electoral-process', component: ElectoralProcessCRUDComponent },
  {path: 'electoral-process-student', component: ElectoralProcessStudentComponent },
  {path: 'home', component: HomeComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'statistics', component: StatisticsComponent},
  {path: 'electoral-process-party', component: ElectoralProcessPartyComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
