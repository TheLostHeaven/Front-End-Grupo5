import { Validators } from '@angular/forms';

export const DiagnosticConfig = Object.freeze({
  i18n: {
    title: 'Autodiagnóstico',
    formContent: {
      question: '¿Observas que otras viviendas o edificios cercanos también están sin electricidad?',
      options: {
        yes: 'Sí',
        no: 'No',
      },
    },
  },
  routes: {
    nextStep: '/form/powers/sectorTwo'
  }
});
