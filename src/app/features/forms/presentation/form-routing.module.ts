import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuPage } from "./pages/menu/menu.page";
import { SelfDiagnosisComponent } from "./pages/self-diagnosis/self-diagnosis.component";
import { FallenPolesComponent } from "./components/fallen-poles/fallen-poles.component";
import { DamagedCablesComponent } from "./components/damaged-cables/damaged-cables.component";
import { PowerOutagesComponent } from "./components/power-outages/power-outages.component";
import { TransformerFailureComponent } from "./components/transformer-failure/transformer-failure.component";

const routes: Routes = [
  { path: 'main', component: MenuPage },
  {path: 'diagnosis', component:SelfDiagnosisComponent },
  {path: 'fallenpoles', component:FallenPolesComponent},
  {path: 'damage', component:DamagedCablesComponent},
  {path: 'powerUp', component:PowerOutagesComponent},
  {path:'tranformer', component: TransformerFailureComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormRoutingModule { }
