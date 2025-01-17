import { Component } from '@angular/core';
import { DiagnosticConfig } from './sector-damage.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector-damage',
  templateUrl: './sector-damage.page.html',
  styleUrls: ['./sector-damage.page.scss']
})
export class SectorDamageComponent {
  public config = DiagnosticConfig;
  public selectedOption: string | null = null;

  constructor(
    private router: Router,){
    }
  public onOptionSelect(option: string): void {
    this.selectedOption = option;
    this.router.navigate([this.config.routes.nextStep]);
  }
}
