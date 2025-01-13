import { Component } from '@angular/core';
import { homeConfig } from './home.config';
import { Router } from '@angular/router';
import { ChevronOrientation } from '@shared/lib/ui/dropdown';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {
  public config = homeConfig

  constructor(
    private router: Router,
  )
  {}

  public goToForms(): void {
    this.router.navigate([this.config.routes.forms]);
  }

}
