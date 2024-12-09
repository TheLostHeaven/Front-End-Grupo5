import { Component } from '@angular/core';
import { FallenPolesConfig } from '@form/presentation/components/fallen-poles/fallen-poles.config';

@Component({
  selector: 'app-self-diagnosis',
  templateUrl: './self-diagnosis.component.html',
  styleUrl: './self-diagnosis.component.scss'
})
export class SelfDiagnosisComponent {
  config=FallenPolesConfig;

}
