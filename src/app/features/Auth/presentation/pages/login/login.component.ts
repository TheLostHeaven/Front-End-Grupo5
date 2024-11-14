import { Component } from '@angular/core';
import { Login } from 'src/app/interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  checked: boolean = false;

  public login:Login={
    username:'',
    password:''
  }

}
