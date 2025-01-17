export const DamageHouseConfig = Object.freeze({
  i18n: {
    title: 'Autodiagnóstico',
    formContent: {
      question: '¿Has notado algún olor a quemado, chispa o cortocircuito en algún punto de la vivienda?',
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
    nextStep: '/form/damageHouse-step3'
  }
})
