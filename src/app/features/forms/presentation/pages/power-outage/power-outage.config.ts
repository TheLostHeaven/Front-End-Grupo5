import { Validators } from "@angular/forms";

export const PowerOutageConfig = Object.freeze({
    i18n: {
      title: 'Corte de energía',
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
          options: {
            damageAtHome: 'Daño en casa',
            damageInSector: 'Daño en el sector',
          },
          images: {
            damageAtHome: 'assets/damageAtHome.svg',
            damageInSector: 'assets/damageInSector.svg',
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
  });  