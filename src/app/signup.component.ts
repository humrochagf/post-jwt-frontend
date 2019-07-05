import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-signup',
  template: `
  <div style="text-align:center">
    <h1>
      Cadastrar
    </h1>
  </div>

  <input #username type='text' placeholder='username'>
  <input #email type='text' placeholder='email'>
  <input #password1 type='password' placeholder='password1'>
  <input #password2 type='password' placeholder='password2'>
  <button (click)="signup(username.value, email.value, password1.value, password2.value)">cadastrar</button>
  <p>{{ error?.message }}</p>
  <p *ngIf="error">{{ error?.error | json }}</p>
  `
})
export class SignupComponent implements OnInit {

  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  signup(username: string, email: string, password1: string, password2: string) {
    this.authService.signup(username, email, password1, password2).subscribe(
      success => this.router.navigate(['list']),
      error => this.error = error
    );
  }
}
