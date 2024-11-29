import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginInformationEntity } from '@auth/core/entities/login-information.entity';
import { RegisterConfig } from '../register.config';

export class ViewModel {
  public form: FormGroup;
  public config = RegisterConfig;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userName: new FormControl(
        this.config.i18n.formContent.user.config.initialValue,
        this.config.i18n.formContent.user.config.validators
      ),
      passWord: new FormControl(
        this.config.i18n.formContent.passWord.config.initialValue,
        this.config.i18n.formContent.passWord.config.validators
      ),
      email: new FormControl(
        this.config.i18n.formContent.email.config.initialValue,
        this.config.i18n.formContent.email.config.validators
      ),
      confirmPassword: new FormControl(
        this.config.i18n.formContent.confirmPassword.config.initialValue,
        this.config.i18n.formContent.confirmPassword.config.validators
      ),
      termsAndConditions: new FormControl(
        this.config.i18n.formContent.termsAndConditions.config.initialValue,
        this.config.i18n.formContent.termsAndConditions.config.validators
      )
    });
  }

  public getFormInformation(): LoginInformationEntity {
    return this.form.value;
  }
}
