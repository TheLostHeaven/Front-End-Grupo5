import { Component, forwardRef, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { generateUniqueId } from '@shared/lib/logic/utils/string';
import { ChevronOrientation, DropdownData } from './dropdown.type';

@Component({
  selector: 'power-fix-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent implements ControlValueAccessor{

  @Input() public textInformative!: string;
  @Input() public messageError!: string;
  @Input() public dropDownLabel!: string;
  @Input() public dropdownObjectValues!: DropdownData[];
  @Input() public isDisabled = false;
  @Input() public virtualScroll = true;
  @Input() public optionValue!: string;
  @Input() public scrollHeightWrapper = '265px';
  @Input() public virtualScrollItemSize = 40;
  @Input() public inputId = generateUniqueId();

  public chevronOrientation = ChevronOrientation.DOWN;

  public changed: (value: any) => void = () => undefined;
  public touched: () => void = () => undefined;

  public writeValue(value: string) {
    this.optionValue = value;
  }

  public onChanges(event: { value: string }): void {
    const value: string = event.value;
    this.optionValue = value;
    this.changed(value);
    this.setChevronOrientationUp();
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setChevronOrientationUp(): void {
    this.chevronOrientation = ChevronOrientation.UP;
  }

  public setChevronOrientationDown(): void {
    this.chevronOrientation = ChevronOrientation.DOWN;
  }
}
