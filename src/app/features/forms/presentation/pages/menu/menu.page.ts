import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MenuConfig } from './menu.config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrl: './menu.page.scss'
})
export class MenuPage {


  public config = MenuConfig;

  public items = [
    {
      title: 'Postes caidos',
      patch: '/home',
      icon: 'assets/poste.svg'
    },
    {
      title: 'Cortes de energía',
      patch: '/home',
      icon: 'assets/corteenergia.svg'
    },
    {
      title: 'Falla de transformador',
      url: '/home',
      icon: 'assets/fallatranformador.svg'
    },
    {
      title: 'Cables dañados o caidos',
      patch: '#',
      icon: 'assets/cablesdañados.svg'
    },
  ];

  constructor(private location: Location) { }

  public getInto():void{
    console.log(this.items[1]);
  }

  goBack(): void {
    this.location.back();
  }
  gofoward(): void {
    this.location.forward();
  }
}
