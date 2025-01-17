import { Component } from '@angular/core';
import { DiagnosticConfig}  from './report-damage.config'
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-damage',
  templateUrl: './report-damage.page.html',
  styleUrl: './report-damage.page.scss'
})
export class ReportDamageComponent {
  public config = DiagnosticConfig;
  public diagnosticForm: UntypedFormGroup;
  public selectedOption: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router : Router,
  ) {
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

  public submitReport() {
    if (this.diagnosticForm.valid && this.selectedOption) {
      if (this.selectedOption === 'yes') {
        this.router.navigate([this.config.routes.poleFlow]);
      } else if (this.selectedOption === 'no') {
        this.router.navigate([this.config.routes.damageFlow]);
      }
    }
  }
}

