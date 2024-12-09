import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/auth/login",
    pathMatch: 'full'
  },

  { path: 'home', loadChildren: () => import('../features/home/presentation/home.module').then(m => m.HomeModule) },

  { path: 'auth', loadChildren: () => import ('../features/auth/presentation/auth.module').then(m => m.AuthModule) },
  { path: 'form', loadChildren: () => import ('../features/forms/presentation/form.module').then(m => m.FormModule)},
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
