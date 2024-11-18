import { Component } from '@angular/core';
import { LoginConfig } from './login.config';
import { ViewModel } from './view-model/view-model';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  public config = LoginConfig;
  private viewModel: ViewModel;
  public loginForm: UntypedFormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.viewModel = new ViewModel(fb);
    this.loginForm = this.viewModel.form;
  }

  public authenticateUser(): void {
    console.log(this.viewModel.getFormInformation());
  }

  public goToRegisterPage(): void {
    this.router.navigate([this.config.routes.register])
  }
}
