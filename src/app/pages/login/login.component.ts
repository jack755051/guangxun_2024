import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LoginPageType } from '../../share/types/common.enum';
import { CommonService } from '../../share/services/common.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regexLoginPagePassword } from '../../share/types/common.regex';
import { Imageurl } from '../../share/types/commom.interface';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

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

  formGroup!: FormGroup;
  // 圖片路徑
  currentImageUrl!: string;
  imageurl!: Imageurl;

  constructor(
    public commonService: CommonService,
    private cdr: ChangeDetectorRef
  ) {
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
    this.imageurl = {
      loginImageUrl: 'login-form-login',
      registerImageUrl: 'login-form-register',
    };
    this.currentImageUrl = 'login-form-login';
    this.initFormGroup();
  }

  focus(): void {
    this.accountInput.nativeElement.focus();
  }

  initFormGroup(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(regexLoginPagePassword),
      ]),
      confirmPassword: new FormControl(''),
    });

    if (this.loginPageType === LoginPageType.REGISTER) {
      this.formGroup
        .get('confirmPassword')
        ?.setValidators([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(regexLoginPagePassword),
        ]);
      this.formGroup.get('confirmPassword')?.updateValueAndValidity();
    }
  }

  /**
   * 執行登入/創建帳號
   * @param form
   */
  executeLogin(postType: LoginPageType, form?: FormGroup): void {
    console.log('送出的類別', postType);
  }

  /**
   * 切換登入狀態時執行
   */
  configureValidators(): void {
    if (this.LoginPageType === LoginPageType.REGISTER) {
      this.formGroup
        .get('confirmPassword')
        ?.setValidators([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(regexLoginPagePassword),
        ]);
    } else {
      this.formGroup.get('confirmPassword')?.clearValidators();
      this.formGroup.get('confirmPassword')?.reset();
    }
    this.formGroup.get('username')?.updateValueAndValidity();
    this.formGroup.get('password')?.updateValueAndValidity();
    this.formGroup.get('confirmPassword')?.updateValueAndValidity();
  }

  /**
   * 登入類型切換
   */
  toggleLoginType(): void {
    this.loginPageType =
      this.loginPageType === LoginPageType.LOGIN
        ? LoginPageType.REGISTER
        : LoginPageType.LOGIN;

    this.updateUIBasedOnLoginType();

    // 確保狀態變化後立即檢測變化
    this.cdr.detectChanges();
    // console.log('loginPageType', this.loginPageType);
  }

  private updateUIBasedOnLoginType(): void {
    // 按鈕文本依狀態改變
    this.buttonText = this.loginPageType.toLowerCase();
    // 更新圖像
    this.currentImageUrl =
      this.loginPageType === LoginPageType.LOGIN
        ? this.imageurl.loginImageUrl
        : this.imageurl.registerImageUrl;
    // 重新配置所有欄位的驗證器
    this.configureValidators();
    // 清理所有欄位內容
    this.formGroup.reset();
    // 確保狀態變化後立即檢測變化
    // this.cdr.detectChanges();
    // 執行欄位聚焦
    this.focus();
  }

  get username() {
    return this.formGroup.get('username') as FormControl;
  }

  get password() {
    return this.formGroup.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.formGroup.get('confirmPassword') as FormControl;
  }
}
