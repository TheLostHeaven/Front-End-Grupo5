
export const MenuConfig = Object.freeze({
    i18n: {
      title: 'Reportar daño',
      btnImage: {
        back: {
        img: 'assets/btnAtras.svg',
        alt: 'ir atras',
          width: '50px',
          height: '50px'
        },
        forward: {
          img: 'assets/btnAdelante.svg',
          alt: 'ir adelante'
          }
      }
    },

    items : [
      {
        title: 'Postes caidos',
        route: '/form/fallenpoles',
        icon: 'assets/poste.svg'
      },
      {
        title: 'Cortes de energía',
        route: '/form/powers',
        icon: 'assets/corteenergia.svg'
      },
      {
        title: 'Falla de Transformador',
        route: '/form/reportTransformerFailure',
        icon: 'assets/fallatranformador.svg'
      },
      {
        title: 'Cables dañados o caidos',
        route: '/form/damage',
        icon: 'assets/cablesdañados.svg'
      },
    ]

  });


