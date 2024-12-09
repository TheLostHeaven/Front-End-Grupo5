import { Validators } from "@angular/forms";

export const FallenPolesConfig = Object.freeze({
  i18n: {
    title: 'Autodiagnóstico',
    formContent: {
      ask: {
        askText: '¿La caída del poste generó una falla de energía en el sector?',
      },
      passWord: {
        label: 'Ingresa la dirección más cercana al poste ',
        placeholder: 'Ingresa dirección',
        config: {
          initialValue: '',
          validators: [
            Validators.required,
          ]
        }
      },
      buttons: {
        YesFallenPolesLabel: 'Si',
        NotFallenPolesLabel: 'No',
        SendReport:"Enviar reporte"
      },
    },
  },

  routes: {
    register: '/auth/register',
    home: '/home',
  },
});
