import { Component } from '@angular/core';
import { DiagnosticConfig } from './sector-damage.config'; 

@Component({
  selector: 'app-sector-damage',
  templateUrl: './sector-damage.page.html',
  styleUrls: ['./sector-damage.page.scss']
})
export class SectorDamageComponent {
  public config = DiagnosticConfig;
  public selectedOption: string | null = null;

  public onOptionSelect(option: string): void {
    this.selectedOption = option; // Al seleccionar una opción, la guardamos
  }
}
