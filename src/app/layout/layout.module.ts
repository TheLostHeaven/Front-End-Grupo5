import { CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { layoutRoutingModule } from './layout-routing.module';
import { layoutComponent } from './layout.component';

import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';

@NgModule({
  declarations: [
    layoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    layoutRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [layoutComponent]
})
export class layoutModule { }
