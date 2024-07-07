import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginPageType } from '../../share/types/common.enum';
import { CommonService } from '../../share/services/common.service';
import { register } from 'module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  @ViewChild('accountInput') accountInput!: ElementRef<HTMLInputElement>;
  isPasswordHide!: boolean;
  isForgetAccountAndPassword!: boolean;

  LoginPageType: any;
  loginPageType!: LoginPageType;
  buttonText: string = '';
  loginPageHint!: { [key: string]: string[] };

  constructor(private commonService: CommonService) {
    this.LoginPageType = LoginPageType;
    this.loginPageHint = {
      login: ["Doesn't have an account?", 'Sign up for free'],
      register: ['Already have an account?', 'Go to Sign Up'],
      forget: ['Forget account or password?', 'Contnet us'],
    };
  }

  ngOnInit(): void {
    this.isPasswordHide = false;
    this.isForgetAccountAndPassword = false;
    this.loginPageType = LoginPageType.LOGIN;

    this.initPage();
  }

  //  頁面加載完成
  ngAfterViewInit() {
    this.focus();
  }

  initPage(): void {
    this.buttonText = LoginPageType.LOGIN.toLowerCase();
  }

  focus(): void {
    this.accountInput.nativeElement.focus();
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
    this.focus();

    console.log('loginPageType', this.loginPageType);
  }
}
