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

  items = Object.entries(MenuConfig.items).map(([key, value]) => ({
    id: key,
    path: value,
  }));

  constructor(private location: Location,private router: Router) { }

  public selectedComponent: string | null = null;

  public showComponent(component: string): void {
    this.selectedComponent = component;
  }

  public setActiveComponent(route: string): void {
    this.router.navigate([route]);
  }
}
