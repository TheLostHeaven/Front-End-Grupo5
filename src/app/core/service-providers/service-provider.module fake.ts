import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from '@environments/environment';
import { CommonModule } from '@angular/common';
import { AuthRepository } from '@auth/core/repositories/auth.repository';
import { AuthImplementationRepository } from '@auth/data/repositories/auth-implementation.repository';
import { AuthService } from '@shared/services/auth.service';

@NgModule({
  providers: [
    {
      provide: AuthRepository,
      useClass: AuthImplementationRepository,
    },
    AuthService,
    { provide: 'SECRET_KEY', useValue: environment.secretKey },
    { provide: 'KEY_ID_TOKEN', useValue: 'accessToken' },
    { provide: 'URL', useValue: environment.API_SERVICES.API_URL },
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceProviderModule { }
