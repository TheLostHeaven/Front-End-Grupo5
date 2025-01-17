import { Validators } from "@angular/forms";

export const DiagnosticConfig = Object.freeze({
  i18n: {
    title: 'Autodiagnóstico',
    formContent: {
      question: '¿Observas algún poste, cable o transformador cercano con daños visibles (como chispas, humo, o que esté inclinado)?',
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
  routes: {
    home: '/home'
  }
});
