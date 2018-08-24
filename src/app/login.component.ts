import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div style="text-align:center">
    <h1>
      Login
    </h1>
  </div>

  <input #username type='text' placeholder='username'>
  <input #password type='password' placeholder='password'>
  <button (click)="login(username.value, password.value)">login</button>
  {{ error?.message }}
  `
})
export class LoginComponent implements OnInit {

  error: any;

  constructor() { }

  ngOnInit() {
  }

  login(username: string, password: number) {
    // TODO: call login
  }
}
