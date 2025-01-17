export const DamageHouseConfig = Object.freeze({
  i18n: {
    title: 'Autodiagnóstico',
    formContent: {
      question: '¿Estabas realizando algún tipo de trabajo eléctrico o conectando algún equipo de alto consumo en la vivienda antes de la interrupción?',
      options: {
        yes: 'Sí',
        no: 'No',
      },
      address: {
        label: 'Ingresa la dirección de la vivienda afectada',
        placeholder: 'Ingresar dirección',
        config: {
          initialValue: '',
        },
      },
      button: {
        submit: 'Enviar reporte',
      },
    },
  },
  routes: {
    nextStep: '/form/damageHouse-step2'
  }
})
