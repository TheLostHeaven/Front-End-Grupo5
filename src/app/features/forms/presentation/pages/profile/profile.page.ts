import { Component } from '@angular/core';
import { ProfileConfig } from './profile.config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrl: './profile.page.scss'
})
export class ProfileComponent {
  // Configuración del componente
  public config = ProfileConfig;

  // Campos del perfil (nombre, número de contrato, contraseña)
  public profileFields = Object.values(this.config.i18n.profileInfo.fields);

  // Contratos disponibles
  public contracts = this.config.i18n.contractsSection.contracts;

  /**
   * Editar un campo específico del perfil
   * @param fieldLabel Nombre del campo que se desea editar
   */
  public editField(fieldLabel: string): void {
    const field = this.profileFields.find((f) => f.label === fieldLabel);

    if (field) {
      const newValue = prompt(`Editar ${field.label}`, field.value); // Muestra un prompt para ingresar el nuevo valor
      if (newValue !== null) {
        field.value = newValue; // Actualiza el valor si no es nulo
        console.log(`Campo "${field.label}" actualizado a: ${newValue}`);
      }
    }
  }

  /**
   * Agregar un nuevo contrato al listado
   */
  public addContract(): void {
    const newContractName = prompt('Ingrese el nombre del contrato:');
    const newContractNumber = prompt('Ingrese el número del contrato:');

    if (newContractName && newContractNumber) {
      this.contracts.push({
        name: newContractName,
        contractNumber: parseInt(newContractNumber, 10),
      });
      console.log(`Contrato agregado: ${newContractName}, N°: ${newContractNumber}`);
    } else {
      console.warn('Debe completar todos los campos para agregar un contrato.');
    }
  }

  /**
   * Guardar los cambios realizados en el perfil
   */
  public saveChanges(): void {
    console.log('Guardando cambios...');
    console.log('Perfil:', this.profileFields);
    console.log('Contratos:', this.contracts);
    alert('Cambios guardados exitosamente.');
  }
}
