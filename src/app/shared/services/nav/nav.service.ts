import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private _isVisible = true;

  get isVisible() {
    return this._isVisible;
  }

  hide() {
    this._isVisible = false;
  }

  show() {
    this._isVisible = true;
  }
}
