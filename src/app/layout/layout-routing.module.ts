import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('../features/reporting-system/presentation/reporting-system.module').then(m => m.ReportingSystemModule) },
  {path: '', loadChildren: () => import ('../features/auth/presentation/auth.module').then(m => m.AuthModule)},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
