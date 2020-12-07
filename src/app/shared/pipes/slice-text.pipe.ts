import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceText'
})
export class SliceTextPipe implements PipeTransform {

  transform(value: string, length: number = 15): unknown {
    if (value.length >= length) {
      return value.slice(0, length) + '...';
    } else {
      return value;
    }
  }

}
