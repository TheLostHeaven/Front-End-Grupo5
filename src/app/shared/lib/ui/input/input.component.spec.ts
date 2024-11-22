import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [
        CommonModule,
        InputTextModule,
        InputTextareaModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Given an type
      When it is password
      Then the p-input-icon-right, input-container__button-eye input elements`, () => {
    // Arrange
    const TYPE = 'password';

    // Act
    component.type = TYPE;
    fixture.detectChanges();
    const elementTypeIcon = fixture.debugElement.query(
      By.css('.p-input-icon-right')
    );

    // Assert
    expect(elementTypeIcon.nativeElement.innerHTML).toContain(
      'input-container__button-eye'
    );
  });

  it(`Given an type
      When it is password
      Then the input-container__button-eye button elements click, change icon and call function handleEyePass`, () => {
    // Arrange
    const TYPE = 'password';
    jest.spyOn(component, 'handleEyePass');

    // Act
    component.type = TYPE;
    fixture.detectChanges();
    const elementButtonEye = fixture.debugElement.nativeElement.querySelector(
      '.input-container__button-eye'
    );
    elementButtonEye.click();
    // Assert
    expect(component.handleEyePass).toHaveBeenCalled();
    expect(component.eyePass).toEqual('icon-eye--off');
  });

  it(`Given an textInformative
      When the type is different 'password'
      Then the input-container__button-question element is show`, () => {
    // Arrange
    const TYPE = 'text';
    const TEXT_INFORMATIVE = 'this is a testing';
    jest.spyOn(component, 'handleInformation');

    // Act
    component.type = TYPE;
    component.textInformative = TEXT_INFORMATIVE;
    fixture.detectChanges();
    const elementButtonInformation =
      fixture.debugElement.nativeElement.querySelector(
        '.input-container__button-question'
      );
    elementButtonInformation.click();
    // Assert
    expect(component.handleInformation).toHaveBeenCalled();
    expect(elementButtonInformation).toBeTruthy();
  });

  it(`Given an type
      When the type is 'textarea'
      Then the textarea element is show and input element is hide`, () => {
    // Arrange
    const TYPE = 'textarea';

    // Act
    component.type = TYPE;
    fixture.detectChanges();
    const elementTextArea =
      fixture.debugElement.nativeElement.querySelector('textarea');
    const elementInput =
      fixture.debugElement.nativeElement.querySelector('input');

    // Assert
    expect(elementTextArea).toBeTruthy();
    expect(elementInput).toBeFalsy();
  });

  it(`Given an type
      When the type is 'text'
      Then the input element is show and textarea element is hide`, () => {
    // Arrange
    const TYPE = 'text';

    // Act
    component.type = TYPE;
    fixture.detectChanges();
    const elementInput =
      fixture.debugElement.nativeElement.querySelector('input');
    const elementTextArea =
      fixture.debugElement.nativeElement.querySelector('textarea');

    // Assert
    expect(elementInput).toBeTruthy();
    expect(elementTextArea).toBeFalsy();
  });

  it(`Given an messageError
      When the messageError is not empty
      Then the input-container__error element is show with message and
      input-container__msg-informative, input-container__text-informative is hide`, () => {
    // Arrange
    const MESSAGE_ERROR = 'this is a message error';

    // Act
    component.messageError = MESSAGE_ERROR;
    fixture.detectChanges();
    const elementMessageError =
      fixture.debugElement.nativeElement.querySelector(
        '.input-container__error'
      );
    const elementMessageInfo = fixture.debugElement.nativeElement.querySelector(
      '.input-container__msg-informative'
    );
    const textInformative = fixture.debugElement.nativeElement.querySelector(
      '.input-container__text-informative'
    );

    // Assert
    expect(elementMessageError.innerHTML).toContain(MESSAGE_ERROR);
    expect(elementMessageError).toBeTruthy();
    expect(elementMessageInfo).toBeFalsy();
    expect(textInformative).toBeFalsy();
  });

  it(`Given an messageInformative
      When the messageInformative is not empty
      Then the input-container__msg-informative element is show with message and
      input-container__error, input-container__text-informative is hide`, () => {
    // Arrange
    const MESSAGE_INFORMATIVE = 'this is a message test';

    // Act
    component.messageInformative = MESSAGE_INFORMATIVE;
    fixture.detectChanges();
    const elementMessageInfo = fixture.debugElement.nativeElement.querySelector(
      '.input-container__msg-informative'
    );
    const elementMessageError =
      fixture.debugElement.nativeElement.querySelector(
        '.input-container__error'
      );
    const textInformative = fixture.debugElement.nativeElement.querySelector(
      '.input-container__text-informative'
    );

    // Assert
    expect(elementMessageInfo.innerHTML).toContain(MESSAGE_INFORMATIVE);
    expect(elementMessageInfo).toBeTruthy();
    expect(elementMessageError).toBeFalsy();
    expect(textInformative).toBeFalsy();
  });

  it(`Given an textInformative
      When the textInformative is not empty and isShowTextInfo is true
      Then the input-container__text-informative element is show with message and
      input-container__error, input-container__msg-informative is hide`, () => {
    // Arrange
    const TEXT_INFORMATIVE = 'this is a message test';

    // Act
    component.textInformative = TEXT_INFORMATIVE;
    component.isShowTextInfo = true;
    fixture.detectChanges();
    const textInformative = fixture.debugElement.nativeElement.querySelector(
      '.input-container__text-informative'
    );
    const elementMessageError =
      fixture.debugElement.nativeElement.querySelector(
        '.input-container__error'
      );
    const elementMessageInfo = fixture.debugElement.nativeElement.querySelector(
      '.input-container__msg-informative'
    );

    // Assert
    expect(textInformative.innerHTML).toContain(TEXT_INFORMATIVE);
    expect(textInformative).toBeTruthy();
    expect(elementMessageError).toBeFalsy();
    expect(elementMessageInfo).toBeFalsy();
  });

  it(`Given handleEyePass function
      When it is called and eyePass is equal to 'icon-eye'
      Then eyePass change to 'icon-eye--off'`, () => {
    // Arrange
    jest.spyOn(component, 'handleEyePass');

    // Act
    component.handleEyePass();

    // Assert
    expect(component.eyePass).toBe('icon-eye--off');
    expect(component.handleEyePass).toHaveBeenCalled();
  });

  it(`Given handleEyePass function
      When it is called and eyePass is equal to 'icon-eye--off'
      Then eyePass change to 'icon-eye'`, () => {
    // Arrange
    component.eyePass = 'icon-eye--off';

    // Act
    component.handleEyePass();

    // Assert
    expect(component.eyePass).toBe('icon-eye');
  });

  it(`Given a input element
      When executed onBlur
      Then the fuction touched should called`, () => {
    // Arrange
    jest.spyOn(component, 'touched');
    const elementInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('.input-field');

    // Act
    elementInput.focus();
    elementInput.blur();

    // Assert
    expect(component.touched).toHaveBeenCalled();
  });

  it(`Given a input element
      When executed onBlur
      Then the fuction touched should called`, () => {
    // Arrange
    jest.spyOn(component, 'changed');
    const paramEvent: any = {
      target: {
        value: 'testing',
      },
    };
    // Act
    component.onChanges(paramEvent);
    // Assert
    expect(component.changed).toHaveBeenCalled();
  });

  it(`When the component has been called
  Then it could have form reactive
  So it must be register all changes`, () => {
    component.registerOnChange('nombreSeleccionado');
    fixture.detectChanges();
  });

  it(`When the component has been called
  Then it could have form reactive
  So it must be register all touched`, () => {
    component.registerOnTouched('nombreSeleccionado');
    fixture.detectChanges();
  });

  it(`When the component has been called
  Then it could have form reactive
  So it must be controled by writeValue`, () => {
    component.writeValue('nombreSeleccionado');
    fixture.detectChanges();
    expect(component.value).toBe('nombreSeleccionado');
  });
});
