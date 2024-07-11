import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'formControl',
})
export class FormControlPipe implements PipeTransform {
  transform(formGroup: FormGroup, formControlName: string): FormControl {
    return formGroup.get(formControlName) as FormControl;
  }
}
