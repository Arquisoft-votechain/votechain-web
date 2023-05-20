import { NgModule } from '@angular/core';
import { RouterModule, ExtraOptions, Routes } from '@angular/router';

const routes: Routes = [
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
export class PortalRoutingModule { }
