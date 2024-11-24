import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType, InputEye } from './input.type';
import { generateUniqueId } from '@shared/lib/logic/generate-unique-id/generate-unique-id';

@Component({
  selector: 'power-fix-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input()type: string | InputType = InputType.Text;
  @Input() placeholder = '';
  @Input() messageInformative = '';
  @Input() messageError = '';
  @Input() textInformative = '';
  @Input() isBig = false;
  @Input() isDisabled = false;
  @Input() iconName = '';
  @Input() iconNameError = '';

  isShowTextInfo = false;
  idElement = generateUniqueId();

  value = '';

  changed: (value: any) => void = () => undefined;
  touched: () => void = () => undefined;
  
  handleInformation() {
    this.isShowTextInfo = !this.isShowTextInfo;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  onChanges(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
}
