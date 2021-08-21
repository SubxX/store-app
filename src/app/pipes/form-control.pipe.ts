import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'formControl',
  pure: true
})
export class FormControlPipe implements PipeTransform {

  transform(val: unknown, ...args: unknown[]): unknown {
    console.log(val);
    return val;
  }

}
