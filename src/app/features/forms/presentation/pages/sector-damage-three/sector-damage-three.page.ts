import { Component } from '@angular/core';
import { DiagnosticConfig } from './sector-damage-three.config'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector-damage-three',
  templateUrl: './sector-damage-three.page.html',
  styleUrl: './sector-damage-three.page.scss'
})
export class SectorDamageThreeComponent {
  public config = DiagnosticConfig;
  public selectedOption: string | null = null;

  constructor(private router : Router,) {}

  public onOptionSelect(option: string): void {
    this.selectedOption = option;
    this.router.navigate([this.config.routes.home]); // Guardamos la opción seleccionada
  }

  public submitReport(): void {
    if (this.selectedOption) {
      const reportData = {
        noiseIssue: this.selectedOption === 'yes',
      };

      // Simula el envío del reporte (puedes integrar un servicio real aquí)
      console.log('Reporte enviado:', reportData);
    }
  }
}
