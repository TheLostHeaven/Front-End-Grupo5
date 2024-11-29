import { Validators } from '@angular/forms';

export const ContractConfig = Object.freeze({
  i18n: {
    title: 'PowerFix',
    formContent: {

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
      warningText:{
          label: 'Se solicita el número de contrato con el fin de verificar  y proteger la informacion de nuestros clientes.',
      },
      buttons: {
        registerLabel: 'Enviar',
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
  },
  routeContract: {
    login: '/auth/contract',
    home: '/home'
  }
});
