import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MenuConfig } from './menu.config';
import { Router } from '@angular/router';

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
      route: 'form/fallenpoles',
      icon: 'assets/poste.svg'
    },
    {
      title: 'Cortes de energía',
      route: 'form/powerUp',
      icon: 'assets/corteenergia.svg'
    },
    {
      title: 'Falla de transformador',
      route: 'form/tranformer',
      icon: 'assets/fallatranformador.svg'
    },
    {
      title: 'Cables dañados o caidos',
      route: '/form/damage',
      icon: 'assets/cablesdañados.svg'
    },
  ];



  constructor(private location: Location,private router: Router) { }

  public selectedComponent: string | null = null;

  public showComponent(component: string): void {
    this.selectedComponent = component;
  }

  public setActiveComponent(route: string): void {
    this.router.navigate([route]);
  }
}
