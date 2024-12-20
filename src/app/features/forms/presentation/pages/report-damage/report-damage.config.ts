import { Validators } from "@angular/forms";

export const DiagnosticConfig = Object.freeze({
  i18n: {
    title: 'Autodiagnóstico',
    formContent: {
      question: '¿La caída del poste generó una falla de energía en el sector?',
      options: {
        yes: 'Sí',
        no: 'No',
      },
      address: {
        label: 'Ingresa la dirección más cercana al poste',
        placeholder: 'Ingresar dirección',
        config: {
          initialValue: '',
          validators: [
            Validators.required,
            Validators.minLength(5),
          ],
        },
      },
      button: {
        submit: 'Enviar reporte',
      },
    },
  },
});
