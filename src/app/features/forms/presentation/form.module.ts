import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { AuthInteractor } from '@auth/core/interactor/auth.interactor';
import { PowerFixInputModule } from '@shared/lib/ui';
import { LoadingService } from '@shared/lib/logic';
import { MenuPage } from './pages/menu/menu.page';
import { ReportDamageComponent } from './pages/report-damage/report-damage.page';
import { FallenPoleReportComponent } from './pages/fallen-pole-report/fallen-pole-report.page';
import { PowerOutageComponent } from './pages/power-outage/power-outage.page';
import { SectorDamageComponent } from './pages/sector-damage/sector-damage.page';
import { SectorDamageTwoComponent } from './pages/sector-damage-two/sector-damage-two.page';
import { SectorDamageThreeComponent } from './pages/sector-damage-three/sector-damage-three.page';
import { TransformerFailureComponent } from './pages/transformer-failure/transformer-failure.page';
import { ProfileComponent } from './pages/profile/profile.page';

@NgModule({
  declarations: [
    MenuPage,
    ReportDamageComponent,
    FallenPoleReportComponent,
    PowerOutageComponent,
    SectorDamageComponent,
    SectorDamageTwoComponent,
    SectorDamageThreeComponent,
    TransformerFailureComponent,
    ProfileComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    ImageModule,
    PowerFixInputModule,
  ],
  providers: [
    AuthInteractor,
    LoadingService
  ]
})
export class FormModule { }
