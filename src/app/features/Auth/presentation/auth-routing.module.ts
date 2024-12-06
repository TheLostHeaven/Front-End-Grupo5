import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from "./pages/login/login.page";
import { RegisterPage } from "./pages/register/register.page";
import { ContractPage } from "./pages/contract/contract.page";



const routes: Routes = [
  { path: 'register', component: RegisterPage},
  { path: 'login', component: LoginPage},
  { path: 'contract', component: ContractPage},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
