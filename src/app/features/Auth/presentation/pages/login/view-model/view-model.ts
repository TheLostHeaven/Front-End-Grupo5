import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginInformationEntity } from '@auth/core/entities/login-information.entity';
import { LoginConfig } from '../login.config';

export class ViewModel {
  public form: FormGroup;
  public config = LoginConfig;

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
    });
  }

  public getFormInformation(): LoginInformationEntity {
    return this.form.value;
  }
}
