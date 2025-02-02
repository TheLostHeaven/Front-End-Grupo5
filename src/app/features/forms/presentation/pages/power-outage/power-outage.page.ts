import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PowerOutageConfig } from './power-outage.config';

@Component({
  selector: 'app-power-outage',
  templateUrl: './power-outage.page.html',
  styleUrl: './power-outage.page.scss'
})
export class PowerOutageComponent {
   public config = PowerOutageConfig;
    public reportForm: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.reportForm = this.fb.group({
        description: [
          this.config.i18n.formContent.description.config.initialValue,
          this.config.i18n.formContent.description.config.validators
        ],
        contactNumber: [
          this.config.i18n.formContent.contactNumber.config.initialValue,
          this.config.i18n.formContent.contactNumber.config.validators
        ]
      });
    }
  
    public setSector(isInSector: boolean): void {
      // Handle sector selection logic here
    }
  
    public submitReport(): void {
      if (this.reportForm.valid) {
        console.log(this.reportForm.value);
        // Implement API call to submit the report
      }
    }
}
