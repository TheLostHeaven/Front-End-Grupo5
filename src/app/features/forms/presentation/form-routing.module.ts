import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuPage } from "./pages/menu/menu.page";
import { FallenPoleReportComponent } from "./pages/fallen-pole-report/fallen-pole-report.page";
import { ReportDamageComponent } from "./pages/report-damage/report-damage.page";
import { PowerOutageComponent } from "./pages/power-outage/power-outage.page";
import { SectorDamageComponent } from "./pages/sector-damage/sector-damage.page";
import { SectorDamageThreeComponent } from "./pages/sector-damage-three/sector-damage-three.page";
import { SectorDamageTwoComponent } from "./pages/sector-damage-two/sector-damage-two.page";
import { TransformerFailureComponent } from "./pages/transformer-failure/transformer-failure.page";
import { ProfileComponent } from "./pages/profile/profile.page";

const routes: Routes = [
  { path: 'menu', component: MenuPage },
  { path: 'reports', component: FallenPoleReportComponent },
  { path: 'fallenpoles', component: ReportDamageComponent },
  { path: 'powers', component: PowerOutageComponent },
  { path: 'powers/sector', component: SectorDamageComponent },
  { path: 'powers/sectorTwo', component: SectorDamageTwoComponent },
  { path: 'powers/sectorThree', component: SectorDamageThreeComponent },
  { path: 'reportTransformerFailure', component: TransformerFailureComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormRoutingModule { }
