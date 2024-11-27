import { Component, ViewEncapsulation } from '@angular/core';
import { LoadingConfig } from './loading.config';

@Component({
  selector: 'power-fix-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingComponent {
  public config = LoadingConfig;
}
