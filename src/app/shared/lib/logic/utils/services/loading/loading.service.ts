import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Injectable } from '@angular/core';
import { LoadingComponent } from '@shared/lib/ui';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private modal: DynamicDialogRef | null;
  private readonly DIALOG_CLASS = 'dialog-loader';

  constructor(private dialogService: DialogService) {
    this.modal = null;
  }

  /**
   * Este metodo muestra el loader
   * @method show
   * @returns {ModalRef}
   */
  public show() {
    if (this.isShown) {
      return;
    }

    this.modal = this.dialogService.open(LoadingComponent, {
      modal: true,
      maskStyleClass: this.DIALOG_CLASS,
      closable: false,
      showHeader: false,
    });

    const dialogRef = this.dialogService.dialogComponentRefMap.get(this.modal);
    const dynamicComponent = dialogRef?.instance as DynamicDialogComponent;
    const ariaLabelledBy = dynamicComponent.getAriaLabelledBy();
    dynamicComponent.getAriaLabelledBy = () => ariaLabelledBy;

    return this.modal;
  }

  /**
   * Este metodo oculta el loader
   * @method hide
   * @returns {void}
   */
  public hide() {
    this.modal?.close();
    this.modal = null;
  }

  private get isShown() {
    return !!this.modal;
  }
}
