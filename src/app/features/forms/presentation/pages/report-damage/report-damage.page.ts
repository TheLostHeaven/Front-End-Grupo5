import { Component } from '@angular/core';
import {DiagnosticConfig} from './report-damage.config'
import { FormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-report-damage',
  templateUrl: './report-damage.page.html',
  styleUrl: './report-damage.page.scss'
})
export class ReportDamageComponent {
  public config = DiagnosticConfig;
  public diagnosticForm: UntypedFormGroup;
  public selectedOption: string | null = null;

  constructor(private fb: FormBuilder) {
    this.diagnosticForm = this.fb.group({
      address: [
        this.config.i18n.formContent.address.config.initialValue,
        this.config.i18n.formContent.address.config.validators,
      ],
    });
  }

  public onOptionSelect(option: string): void {
    this.selectedOption = option;
  }

  public submitReport(): void {
    if (this.diagnosticForm.valid && this.selectedOption) {
      const reportData = {
        energyIssue: this.selectedOption === 'yes',
        address: this.diagnosticForm.value.address,
      };

      // Simula el envío del reporte (puedes integrar un servicio real aquí)
      console.log('Reporte enviado:', reportData);
    }
  }
}
