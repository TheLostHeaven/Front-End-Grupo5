import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuPage } from "./pages/menu/menu.page";

const routes: Routes = [
  { path: 'menu', component: MenuPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormRoutingModule { }
