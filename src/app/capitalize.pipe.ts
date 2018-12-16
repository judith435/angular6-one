import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, num: number = 1): any {
    return value.substring(0, num).toUpperCase() + value.slice(num);
  }

}
