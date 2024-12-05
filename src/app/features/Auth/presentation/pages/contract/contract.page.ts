import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContractConfig }  from "./contract.config";
import { Router } from '@angular/router';
import { ViewModel } from '../login/view-model/view-model';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { AuthInteractor } from '@auth/core/interactor/auth.interactor';
import { SessionProviderservice } from '@shared/services/auth/session-provider.service';
import { LoadingService } from '@shared/lib/logic';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrl: './contract.page.scss',
})
export class ContractPage {

  public config = ContractConfig;

  private viewModel: ViewModel
  public contractForm: UntypedFormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authInteractor: AuthInteractor,
    public sessionProvider: SessionProviderservice,
    public loaderService: LoadingService
  ) {
    this.viewModel = new ViewModel(this.fb);
    this.contractForm = this.viewModel.form;
  }

  onSubmit(){
    if (this.contractForm.valid) {
      this.router.navigate([this.config.routeContract.login]);
    }
  }
  goToLoginPage(){
    alert('Registro exitoso');
    this.router.navigate([this.config.routeLogin.login]);
  }

 }
