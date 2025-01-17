import { Component } from '@angular/core';
import { DamageHouseConfig } from './damage-house-step3.config';
import { FormBuilder, UntypedFormGroup, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-damage-house-step3',
  templateUrl: './damage-house-step3.page.html',
  styleUrl: './damage-house-step3.page.scss'
})
export class DamageHouseStep3Page {
  public config = DamageHouseConfig;
  public selectedOption: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router : Router,
  ) {
  }
  public onOptionSelect(option: string): void {
    this.selectedOption = option;
    this.router.navigate([this.config.routes.home]);
  }

}
