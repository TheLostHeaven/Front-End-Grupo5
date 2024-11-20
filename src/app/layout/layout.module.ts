import { CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
//Import component reutilizables
import { LayoutComponent } from './layout.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
//Import modules
import { LayoutRoutingModule } from './layout-routing.module';
import { ReportingSystemModule } from '@reporting-system/presentation/reporting-system.module';
import { AuthModule } from '@auth/presentation/auth.module';
import { ServiceProviderModule } from '../core/service-providers/service-provider.module';
import { SessionProviderservice } from '@shared/services/auth/session-provider.service';
import { ApiService } from '@shared/services/api/api.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    LayoutRoutingModule,
    ReportingSystemModule,
    AuthModule,
    ServiceProviderModule,
  ],
  providers: [
    provideClientHydration(),
    ApiService,
    provideHttpClient(withFetch())
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
