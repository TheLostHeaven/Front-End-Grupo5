import { CUSTOM_ELEMENTS_SCHEMA ,NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
//Import component reutilizables
import { LayoutComponent } from './layout.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
//Import modules
import { LayoutRoutingModule } from './layout-routing.module';
import { FormModule } from '@form/presentation/form.module';
import { AuthModule } from '@auth/presentation/auth.module';
import { ServiceProviderModule } from '../core/service-providers/service-provider.module';
import { ApiService } from '@shared/services/api/api.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingService } from '@shared/lib/logic';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    LayoutRoutingModule,
    AuthModule,
    FormModule,
    ServiceProviderModule,
  ],
  providers: [
    provideClientHydration(),
    ApiService,
    provideHttpClient(withFetch()),
    DialogService,
    DynamicDialogRef,
    LoadingService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
