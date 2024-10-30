import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingSystemRoutingModule } from './reporting-system-routing.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReportingSystemRoutingModule
  ]
})
export class ReportingSystemModule { }
