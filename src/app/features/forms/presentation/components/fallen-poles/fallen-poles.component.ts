import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importar Router


@Component({
  selector: 'app-fallen-poles',
  templateUrl: './fallen-poles.component.html',
  styleUrl: './fallen-poles.component.scss'
})
export class FallenPolesComponent {
  fallenPolesForm: FormGroup;

  constructor(private fb: FormBuilder, private fbrouter: FormBuilder, private router: Router) {
    // Inicializa el formulario reactivo
    this.fallenPolesForm = this.fb.group({
      powerOutage: ['', Validators.required], // Validación de campo requerido para la pregunta
      address: ['', [Validators.required, Validators.minLength(5)]], // Validaciones requeridas y longitud mínima
    });

  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.fallenPolesForm.valid) {
      const formData = this.fallenPolesForm.value;
      console.log('Formulario enviado:', formData);
      alert('Reporte enviado con exito');
      this.router.navigate(['/form/main']); // Redirigir a la ruta

      // Aquí puedes enviar los datos al servidor o realizar otras acciones
    } else {
      console.log('Formulario inválido');
      this.fallenPolesForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar errores
    }
  }

  setPowerOutage(value: string) {
    this.fallenPolesForm.get('powerOutage')?.setValue(value);
  }
}
