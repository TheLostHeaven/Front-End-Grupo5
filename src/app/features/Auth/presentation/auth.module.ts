import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { RegisterPage } from './pages/register/register.page';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { LoginPage } from './pages/login/login.page';
import { AuthInteractor } from '@auth/core/interactor/auth.interactor';
import { PowerFixInputModule } from '@shared/lib/ui';
import { LoadingService } from '@shared/lib/logic';

@NgModule({
  declarations: [
    RegisterPage,
    LoginPage

  ],
  exports: [
    LoginPage
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
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
export class AuthModule { }
