import { NgModule } from '@angular/core';

import { LoadingComponent } from './loading.component';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [LoadingComponent],
  imports: [ImageModule],
  exports: [LoadingComponent],
})
export class PowerFixLoadingModule {}
