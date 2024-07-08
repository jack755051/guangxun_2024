import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { FormErrorMessages } from '../types/common.enum';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  detectFormControlValid(fc: FormControl): string {
    let errorMessage: string = `錯誤原因：`;
    const errors: string[] = [];

    if (fc.errors && (fc.touched || fc.dirty)) {
      if (fc.errors['required']) {
        errors.push(FormErrorMessages.Required);
      }
      if (fc.errors['minlength']) {
        errors.push(
          `${FormErrorMessages.MinLength} ${fc.errors['minlength'].requiredLength} 個字元`
        );
      }
      if (fc.errors['maxlength']) {
        errors.push(
          `${FormErrorMessages.MaxLength} ${fc.errors['maxlength'].requiredLength} 個字元`
        );
      }
      if (fc.errors['email']) {
        errors.push(FormErrorMessages.Email);
      }

      if (fc.errors['pattern']) {
        errors.push(FormErrorMessages.Regex);
      }

      if (errors.length > 0) {
        errorMessage += errors.join('、');
      } else {
        errorMessage = ''; // 如果没有错误或不需要显示错误，可以清空消息或自定义
      }
    }

    return errorMessage;
  }
}
