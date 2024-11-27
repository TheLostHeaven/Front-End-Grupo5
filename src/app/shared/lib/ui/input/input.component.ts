import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from './input.type';
import { generateUniqueId } from '@shared/lib/logic/utils/string/generate-unique-id/generate-unique-id';

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
  @Input() placeholder = '';
  @Input()type: string | InputType = InputType.Text;
  @Input() messageError = '';
  @Input() isDisabled = false;
  @Input() iconError = '';

  public idElement: string = generateUniqueId();

  public value: string = '';

  public changed: (value: any) => void = () => undefined;
  public touched: () => void = () => undefined;

  public writeValue(value: string): void {
    this.value = value;
  }

  public onChanges(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
}
