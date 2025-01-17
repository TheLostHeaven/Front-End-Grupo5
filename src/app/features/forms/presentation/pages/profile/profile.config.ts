export const ProfileConfig = Object.freeze({
    i18n: {
      profileHeader: {
        name: 'Paola Sanchez',
        profileIcon: 'assets/profile-icon.svg',
      },
      profileInfo: {
        fields: {
          name: {
            label: 'Nombre:',
            value: 'Paola Sanchez',
            editable: true,
            icon: 'assets/edit-icon.svg',
          },
          contractNumber: {
            label: 'N° contrato:',
            value: '460909',
            editable: true,
            icon: 'assets/edit-icon.svg',
          },
          password: {
            label: 'Cambiar contraseña:',
            value: '********',
            editable: true,
            icon: 'assets/edit-icon.svg',
          },
        },
      },
      contractsSection: {
        title: 'Mis contratos',
        contracts: [
          { name: 'Cristian García Gutierrez', contractNumber: 460909 },
          { name: 'Paola Sanchez', contractNumber: 5263124 },
          { name: 'Mariana Saldarriaga', contractNumber: 456562 },
        ],
        addContractButton: '+ Agregar contrato',
      },
      actions: {
        saveButton: 'Cerrar y guardar',
      },
    },
  });
  