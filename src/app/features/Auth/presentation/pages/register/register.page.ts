import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el Router
import { RegisterConfig } from './register.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterComponent {
  public registerForm: FormGroup;

  public config = RegisterConfig;

  constructor(private fb: FormBuilder, private router: Router) { // Inyecta el Router
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

  goToLoginPage(): void {
    this.router.navigate([this.config.routeLogin.login]); // Redirección al login
    console.log('Redirigiendo al login...');
  }
}
