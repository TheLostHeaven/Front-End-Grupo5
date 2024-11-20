import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/auth/login",
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('../features/reporting-system/presentation/reporting-system.module').then(m => m.ReportingSystemModule) },
  { path: 'auth', loadChildren: () => import ('../features/auth/presentation/auth.module').then(m => m.AuthModule) },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
