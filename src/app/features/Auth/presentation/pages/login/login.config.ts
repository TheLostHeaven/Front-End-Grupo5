import { Validators } from "@angular/forms";

export const LoginConfig = Object.freeze({
  i18n: {
    title: 'PowerFix',
    formContent: {
      user: {
        label: 'Ingresar Nombre',
        placeholder: 'Ingresar Nombre',
        config: {
          initialValue: '',
          validators: [
            Validators.required,
          ]
        }
      },
      passWord: {
        label: 'Contraseña',
        placeholder: '*****',
        config: {
          initialValue: '',
          validators: [
            Validators.required,
          ]
        }
      },
      buttons: {
        sigInLabel: 'Entrar',
        registerLabel: 'Registrarse'
      }
    }
  },
  image: {
    logo: {
      img: 'assets/LogoPowerfix.svg',
      alt: 'PowerFix Logo'
    }
  },
  routes: {
    register: '/auth/register',
    home: '/home'
  }
})
