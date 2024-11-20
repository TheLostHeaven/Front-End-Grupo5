import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRepository } from '@auth/core/repositories/auth.repository';
import { AuthImplementationRepositoryFake } from '@auth/data/repositories/auth-implementation.repository.fake';

@NgModule({
  providers: [
    {
      provide: AuthRepository,
      useClass: AuthImplementationRepositoryFake,
    },
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceProviderModule { }
