import { Validators } from '@angular/forms';

export const RegisterConfig = Object.freeze({
  i18n: {
    title: 'PowerFix',
    formContent: {
      user: {
        label: 'Nombre de usuario',
        placeholder: 'Ingresar Nombre',
        config: {
          initialValue: '',
          validators: [
            Validators.required,
          ]
        }
      },
      email: {
        label: 'Correo Electrónico',
        placeholder: 'PowerFix@gmail.com',
        config: {
          initialValue: '',
          validators: [
            Validators.required,
          ]
        }
      },
      passWord: {
        label: 'Contraseña',
        placeholder: '(mínimo 8 caracteres)',
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
        placeholder: 'Confirma la Contraseña',
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
      img: 'assets/LogoPowerfix.svg',
      alt: 'PowerFix Logo'
      }
    }
  },
  routeLogin: {
    login: '/auth/login',
    home: '/home'
  }
});
