import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], searchArgi: string): string [] {
    debugger
    if (!value || !searchArgi) {
      return value;
    }
    return value.filter(x => x.includes(searchArgi));
  }

}
