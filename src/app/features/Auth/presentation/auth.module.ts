import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent} from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CheckboxModule
  ]
})
export class AuthModule { }
