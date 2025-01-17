export const DamageHouseConfig = Object.freeze({
  i18n: {
    title: 'Autodiagnóstico',
    formContent: {
      question: 'Después de la interrupción, ¿escuchaste algún ruido fuerte o extraño, o notaste algo inusual como chispas, humo o cables sueltos en la calle?',
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
    home: '/home'
  }
})
