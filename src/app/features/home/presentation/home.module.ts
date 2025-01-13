import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { DropdownModule } from 'primeng/dropdown';
import { LoadingService } from '@shared/lib/logic';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from "primeng/floatlabel"
import { PowerFixDropdownModule } from '@shared/lib/ui/dropdown';
import { Button } from 'primeng/button';
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [
    HomePage
  ],
  exports: [
    HomePage
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DropdownModule,
    FormsModule,
    FloatLabelModule,
    PowerFixDropdownModule,
    Button,
    ImageModule,
  ],
  providers: [
    LoadingService
  ],
})
export class HomeModule { }
