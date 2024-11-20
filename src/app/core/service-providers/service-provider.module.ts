import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from '@environments/environment';
import { CommonModule } from '@angular/common';
import { AuthRepository } from '@auth/core/repositories/auth.repository';
import { AuthImplementationRepository } from '@auth/data/repositories/auth-implementation.repository';

@NgModule({
  providers: [
    {
      provide: AuthRepository,
      useClass: AuthImplementationRepository,
    },
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceProviderModule { }
