import { Component } from '@angular/core';
import { MenuConfig } from '@form/presentation/pages/menu/menu.config';
import { Location } from '@angular/common';


@Component({
  selector: 'app-btn-navigate',
  templateUrl: './btn-navigate.component.html',
  styleUrl: './btn-navigate.component.scss'
})
export class BtnNavigateComponent {


  public config = MenuConfig;

  constructor(private location: Location) { }

  public goBack(): void {
    this.location.back();
  }
  public goForward(): void {
    this.location.forward();
  }



}
