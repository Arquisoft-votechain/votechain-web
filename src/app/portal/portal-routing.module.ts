import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticPartyComponent } from './pages/politic-party/politic-party.component';
import { StudentCRUDComponent } from './pages/student-crud/student-crud.component';
import { ElectoralProcessCRUDComponent } from './pages/electoral-process-crud/electoral-process-crud.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'politic-party', component: PoliticPartyComponent },
  {path: 'student', component: StudentCRUDComponent },
  {path: 'electoral-process', component: ElectoralProcessCRUDComponent },
  {path: 'home', component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
