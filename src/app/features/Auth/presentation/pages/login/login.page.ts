import { Component } from '@angular/core';
import { LoginConfig } from './login.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss'
})
export class LoginPage {

  public config = LoginConfig;

}
