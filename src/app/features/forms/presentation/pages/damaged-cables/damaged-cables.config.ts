import { Validators } from "@angular/forms";

export const DamagedCablesConfig = Object.freeze({
  i18n: {
    title: 'Cables Dañados',
    formContent: {
      description: {
        label: 'Descripción',
        placeholder: 'Describe el problema con los cables',
        config: {
          initialValue: '',
          validators: [Validators.required, Validators.maxLength(300)],
        },
      },
      sector: {
        question: '¿Fue en tu sector el daño de los cables?',
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
    home: '/home'
  }
});
