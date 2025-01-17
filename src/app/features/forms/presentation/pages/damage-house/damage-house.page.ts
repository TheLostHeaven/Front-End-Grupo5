import { Component } from '@angular/core';
import { DamageHouseConfig } from './damage-house.config';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-damage-house',
  templateUrl: './damage-house.page.html',
  styleUrl: './damage-house.page.scss'
})
export class DamageHousePage {
    public config = DamageHouseConfig;
    public diagnosticForm: UntypedFormGroup;
    public selectedOption: string | null = null;

    constructor(
      private fb: FormBuilder,
      private router : Router,
    ) {
      this.diagnosticForm = this.fb.group({
        address: [
          this.config.i18n.formContent.address.config.initialValue,
        ],
      });

    }

  public onOptionSelect(option: string): void {
    this.selectedOption = option;
    this.router.navigate([this.config.routes.nextStep]);
  }

}
