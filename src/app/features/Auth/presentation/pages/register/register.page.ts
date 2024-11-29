import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterConfig } from './register.config';
import { AuthInteractor } from '@auth/core/interactor/auth.interactor';
import { RegisterResponseEntity } from '@auth/core/entities/register-response.entity';
import { SessionProviderservice } from '@shared/services/auth/session-provider.service';
import { LoadingService } from '@shared/lib/logic';
import { LoginResponseEntity } from '@auth/core/entities/login-response.entity';
import { ViewModel } from './view-model/view-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterComponent {
  public config = RegisterConfig;
  private viewModel: ViewModel
  public registerForm: UntypedFormGroup;
  public authResponse! : LoginResponseEntity


  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authInteractor: AuthInteractor,
    public sessionProvider: SessionProviderservice,
    public loaderService: LoadingService
  ) {
    this.viewModel = new ViewModel(this.fb);
    this.registerForm = this.viewModel.form;
  }

  onSubmit() {
    if (this.registerForm.valid) {
    }
  }

  goToLoginPage(): void {
    this.router.navigate([this.config.routeLogin.login]);

  }
}
