import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FallenPoleReportConfig } from './fallen-pole-report.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fallen-pole-report',
  templateUrl: './fallen-pole-report.page.html',
  styleUrls: ['./fallen-pole-report.page.scss']
})
export class FallenPoleReportComponent {
  public config = FallenPoleReportConfig;
  public reportForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) {
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
  }

  public submitReport(): void {
      this.router.navigate([this.config.routes.home]);
  }
}
