import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movie'
})
export class MoviePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value * 4;
  }

}
