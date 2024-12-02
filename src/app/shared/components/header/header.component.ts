import { Component } from '@angular/core';
import { HeaderConfig } from './header.config';
import { Router } from '@angular/router';
import { NavService } from '../../services/nav/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public config = HeaderConfig

  constructor( private router: Router, public navbarService: NavService){

  }
  public goToHome(): void {
    this.router.navigate([this.config.routes.home])
  }

}
