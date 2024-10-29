import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { layoutModule } from './layout.module';
import { layoutComponent } from './layout.component';

@NgModule({
  imports: [
    layoutModule,
    ServerModule,
  ],
  bootstrap: [layoutComponent],
})
export class layoutServerModule {}
