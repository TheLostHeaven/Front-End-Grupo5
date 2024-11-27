import { Validators } from '@angular/forms';

export const RegisterConfig = Object.freeze({
  i18n: {
    title: 'PowerFix',
    formContent: {
      userName: {
        label: 'Nombre de usuario',
        placeholder: 'Ingresar Nombre',
        config: {
          initialValue: '',
          validators: [
            Validators.required,
            Validators.email
          ]
        }
      },
      email: {
        label: 'Correo Electrónico',
        placeholder: 'PowerFix@gmai.com',
        config: {
          initialValue: '',
          validators: [
            Validators.required,
            Validators.email
          ]
        }
      },
      password: {
        label: 'Contraseña',
        placeholder: 'Ingrese su contraseña',
        config: {
          initialValue: '',
          validators: [
            Validators.required,
            Validators.minLength(8)
          ]
        }
      },
      confirmPassword: {
        label: 'Confirmar Contraseña',
        placeholder: 'Repita su contraseña',
        config: {
          initialValue: '',
          validators: [
            Validators.required
          ]
        }
      },
      numberContrac: {
        label: 'Numero de contrato',
        placeholder: 'Ingrese numero de contrato',
        config: {
          initialValue: '',
          validators: [
            Validators.required,
            Validators.minLength(10)
          ]
        }
      },
      termsAndConditions:{
          label: 'Acepto políticas de tratamiento de datos',
          config: {
            initialValue: false,
            validators: [
              Validators.requiredTrue
            ]
          }

      },
      buttons: {
        registerLabel: 'Siguiente',
        loginLabel: 'Iniciar Sesión'
      }
    },
    image: {
      logo: {
        img: 'assets/LogoPowerfix.svg', // Ruta de la imagen
        alt: 'Logo de Registro'
      }
    }
  },
  routes: {
    login: 'auth/login',
    home: '/home'
  }
});
