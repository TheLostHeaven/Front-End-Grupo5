export const homeConfig = Object.freeze({
  i18n: {
    title: 'PowerFix',

    subTitle: 'DAÑOS REPORTADOS EN EL ÁREA',
    moreInfo: 'Paga y informate de tus facturas',
    formContent:{
      dropdown:{
        titleDrop:'Cristian Garcia'
      },
      buttons: {
        butomLabel: 'Reportar daño',
        pay:'Pagar factura',
        download:'Descargar factura',
        view:'Ver consumo'
    }
    },

  },
  image: {
    logo: {
      img: 'assets/LogoPowerfix.svg',
      alt: 'PowerFix Logo'
    },
    iconHome:{
      img: 'assets/iconHome.svg',
      alt: 'icon'
    }
  },
  routes: {

    home: '/home',
    forms: '/form/menu',
  }
})
