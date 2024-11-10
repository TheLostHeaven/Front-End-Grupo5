import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/login.interface';

@Component({
  selector: 'presentation-LoginFormComponent',
  templateUrl: './LoginForm.component.html',
})

export class LoginFormComponent implements OnInit {
  checked: boolean = false;

  public login:Login={
    username:'',
    password:''
  }
  constructor() { }

  ngOnInit() { }
}
