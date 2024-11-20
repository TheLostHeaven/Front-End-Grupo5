import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from "./pages/login/login.page";
import { RegisterComponent } from "./pages/register/register.component";


const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
