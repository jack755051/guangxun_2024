import { Component, OnInit } from '@angular/core';
import { LoginPageType } from '../../share/types/common.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  isPasswordHide!: boolean;
  isForgetAccountAndPassword!: boolean;

  LoginPageType: any;
  loginPageType!: LoginPageType;
  buttonText: string = '';

  constructor() {
    this.LoginPageType = LoginPageType;
  }

  ngOnInit(): void {
    this.isPasswordHide = false;
    this.isForgetAccountAndPassword = false;
    this.loginPageType = LoginPageType.LOGIN;

    this.initPage();
  }

  initPage(): void {
    this.buttonText = LoginPageType.LOGIN.toLowerCase();
  }

  /**
   * 登入類型切換
   */
  toggleLoginType(): void {
    this.loginPageType =
      this.loginPageType === LoginPageType.LOGIN
        ? LoginPageType.REGISTER
        : LoginPageType.LOGIN;

    this.buttonText = this.loginPageType.toLowerCase();

    console.log('loginPageType', this.loginPageType);
  }
}
