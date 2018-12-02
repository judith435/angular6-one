import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Colorme]'
})
export class ColormeDirective {

  constructor(e:ElementRef) { 
    e.nativeElement.style.color = 'fuchsia';
  }

}
