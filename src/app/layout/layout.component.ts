import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '@shared/services/nav/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit{

  private hiddenRoutes = ['/auth/login', '/auth/register'];

  constructor(private router: Router, private navbarService: NavService) {}

  ngOnInit() {
      this.router.events.subscribe(() => {
        const currentUrl = this.router.url;
        if (this.hiddenRoutes.includes(currentUrl)) {
          this.navbarService.hide();
        } else{
          this.navbarService.show();
        }
      })
  }


}
