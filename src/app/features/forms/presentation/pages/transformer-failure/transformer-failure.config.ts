import { Validators } from "@angular/forms";

export const TransformerFailureConfig = Object.freeze({
  i18n: {
    title: 'Falla de transformador',
    formContent: {
      description: {
        label: 'Descripción',
        placeholder: 'Describe el problema',
        config: {
          initialValue: '',
          validators: [Validators.required, Validators.maxLength(200)],
        },
      },
      sector: {
        question: '¿Fue en tu sector el imprevisto del poste?',
        options: {
          yes: 'Sí',
          no: 'No',
        },
      },
      contactNumber: {
        label: 'Número de contacto',
        placeholder: 'Número de contacto',
        config: {
          initialValue: '',
          validators: [Validators.required, Validators.pattern(/^\d{10}$/)],
        },
      },
      damageDetails: {
        buttons: {
          location: 'Dirección del daño',
          photo: 'Incluir foto',
        },
        images: {
          location: 'assets/location.svg',
          photo: 'assets/photo-icon.svg',
        },
      },
      buttons: {
        submitLabel: 'Enviar reporte',
      },
    },
  },
  routes: {
    nextStep: '/form/reportTransformerform'
  }
});
