import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PoliticPartyComponent } from './component/politic-party/politic-party.component';
import { StudentCRUDComponent } from './component/student-crud/student-crud.component';
import { ElectoralProcessCRUDComponent } from './component/electoral-process-crud/electoral-process-crud.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'politic-party', component: PoliticPartyComponent },
  {path: 'student', component: StudentCRUDComponent },
  {path: 'electoral-process', component: ElectoralProcessCRUDComponent },
  {path: 'home', component: HomeComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoRoutingModule { }
