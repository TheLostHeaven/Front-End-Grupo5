import { Component } from '@angular/core';
import { LoginConfig } from './login.config';
import { ViewModel } from './view-model/view-model';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthInteractor } from '@auth/core/interactor/auth.interactor';
import { LoginResponseEntity } from '@auth/core/entities/login-response.entity';
import { lastValueFrom } from 'rxjs';
import { SessionProviderservice } from '@shared/services/auth/session-provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  public config = LoginConfig;
  private viewModel: ViewModel;
  public loginForm: UntypedFormGroup;
  public authResponse!: LoginResponseEntity;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authInteractor: AuthInteractor,
    public sessionProvider: SessionProviderservice
  ) {
    this.viewModel = new ViewModel(this.fb);
    this.loginForm = this.viewModel.form;
  }

  public authenticateUser(): void {
    this.authInteractor.authenticateUser(this.viewModel.getFormInformation()).subscribe({
      next: (response: LoginResponseEntity) => {
        this.authResponse = response;
        this.sessionProvider.setInformationToken(response?.token)
      },
      error: (error) => {
        throw new Error(error);
      },
      complete: () => {
        this.router.navigate([this.config.routes.home])
      }
    })
  }

  public goToRegisterPage(): void {
    this.router.navigate([this.config.routes.register]);
  }
}
