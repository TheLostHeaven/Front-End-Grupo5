import { Component } from '@angular/core';
import {DiagnosticConfig} from './diagnosis-damaged.config'
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnosis-damaged',
  templateUrl: './diagnosis-damaged.page.html',
  styleUrl: './diagnosis-damaged.page.scss'
})
export class DiagnosisDamagedComponent {
   public config = DiagnosticConfig;
    public diagnosticForm: UntypedFormGroup;
    public selectedOption: string | null = null;

    constructor(private fb: FormBuilder, private router : Router) {
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
          route : this.router.navigate([this.config.routes.home]),
        };

      }
    }
}
