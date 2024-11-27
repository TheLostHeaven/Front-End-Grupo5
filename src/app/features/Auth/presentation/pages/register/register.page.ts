import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterConfig } from './register.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterComponent {
  public registerForm: FormGroup;

  public config = RegisterConfig;


  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: [this.config.i18n.formContent.email.config.initialValue, this.config.i18n.formContent.email.config.validators],
      password: [this.config.i18n.formContent.password.config.initialValue, this.config.i18n.formContent.password.config.validators],
      confirmPassword: [this.config.i18n.formContent.confirmPassword.config.initialValue, this.config.i18n.formContent.confirmPassword.config.validators]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Registro exitoso:', this.registerForm.value);
      // Aquí puedes agregar lógica para enviar los datos al servidor
    }
  }

  goToLoginPage() {
    console.log('Redirigiendo al login...');
    // Lógica de redirección al login
  }
}
