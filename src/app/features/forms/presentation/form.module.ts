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
import { BtnNavigateComponent } from './components/btn-navigate/btn-navigate.component';
import { SelfDiagnosisComponent } from './pages/self-diagnosis/self-diagnosis.component';
import { FallenPolesComponent } from './components/fallen-poles/fallen-poles.component';
import { PowerOutagesComponent } from './components/power-outages/power-outages.component';
import { TransformerFailureComponent } from './components/transformer-failure/transformer-failure.component';
import { DamagedCablesComponent } from './components/damaged-cables/damaged-cables.component';
import { ToggleButtonModule } from 'primeng/togglebutton';


@NgModule({
  declarations: [
    MenuPage,
    SelfDiagnosisComponent,
    BtnNavigateComponent,
    FallenPolesComponent,
    PowerOutagesComponent,
    TransformerFailureComponent,
    DamagedCablesComponent
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
    ToggleButtonModule
  ],
  providers: [
    AuthInteractor,
    LoadingService
  ]
})
export class FormModule { }
