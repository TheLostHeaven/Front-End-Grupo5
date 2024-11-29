import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContractConfig }  from "./contract.config";
import { Router } from '@angular/router';
import { ViewModel } from '../login/view-model/view-model';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrl: './contract.page.scss',
})
export class ContractPage {

  public config = ContractConfig;

  private viewModel: ViewModel
  public registerForm: UntypedFormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.viewModel = new ViewModel(this.fb);
    this.registerForm = this.viewModel.form;
  }

  onSubmit(){
    console.log('onSubmit');
  }
  goToLoginPage(){
    alert('Registro exitoso');
    this.router.navigate([this.config.routeLogin.login]);
  }

 }
