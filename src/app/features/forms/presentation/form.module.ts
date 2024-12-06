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

@NgModule({
  declarations: [
    MenuPage
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
    PowerFixInputModule
  ],
  providers: [
    AuthInteractor,
    LoadingService
  ]
})
export class FormModule { }
