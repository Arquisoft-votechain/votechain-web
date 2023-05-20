import { NgModule } from '@angular/core';
import { RouterModule, ExtraOptions, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'portal',
    //component: BaseLayoutComponent,
    //canActivate: [AuthGuard],
    loadChildren: () => import('./portal/portal.module').then(m => m.PortalModule)
  },
  {
    path: '',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./acceso/acceso.module').then(m => m.AccesoModule)
  },
  {
    path: '**',
    redirectTo: ''
  }

];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
