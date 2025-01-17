import { Component } from '@angular/core';
import { DiagnosticConfig } from './sector-damage-two.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector-damage-two',
  templateUrl: './sector-damage-two.page.html',
  styleUrl: './sector-damage-two.page.scss'
})
export class SectorDamageTwoComponent {
  public config = DiagnosticConfig;
    public selectedOption: string | null = null;

    constructor(private router : Router,

    ) {}

    public onOptionSelect(option: string): void {
      this.selectedOption = option;
      this.router.navigate([this.config.routes.nextStep]);
    }
}
