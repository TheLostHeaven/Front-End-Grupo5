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
import { DamagedCablesComponent } from "./pages/damaged-cables/damaged-cables.page";
import { DamageHousePage } from "./pages/damage-house/damage-house.page";
import { DamageHouseStep2Page } from "./pages/damage-house-step2/damage-house-step2.page";
import { DamageHouseStep3Page } from "./pages/damage-house-step3/damage-house-step3.page";
import { DiagnosisDamagedComponent } from "./pages/diagnosis-damaged/diagnosis-damaged.page";

const routes: Routes = [
  { path: 'menu', component: MenuPage },
  { path: 'reports', component: FallenPoleReportComponent },
  { path: 'fallenpoles', component: ReportDamageComponent },

  { path: 'powers', component: PowerOutageComponent },
  { path: 'powers/sector', component: SectorDamageComponent },
  { path: 'powers/sectorTwo', component: SectorDamageTwoComponent },
  { path: 'powers/sectorThree', component: SectorDamageThreeComponent },

  { path: 'reportTransformerFailure', component: TransformerFailureComponent },
  { path: 'reportTransformerform', component: DiagnosisDamagedComponent },

  { path: 'damage', component: DamagedCablesComponent },

  { path: 'damageHouse', component: DamageHousePage },
  { path: 'damageHouse-step2', component: DamageHouseStep2Page },
  { path: 'damageHouse-step3', component: DamageHouseStep3Page },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormRoutingModule { }
