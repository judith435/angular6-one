import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyBtn]',
  host:{
    '(mouseenter)':'onMouseEnter()',
    '(mouseleave)':'onMouseLeave()',
    '(click)':'onMouseClick()'
  }
})
export class MyBtnDirective {
private el: HTMLElement;
  constructor(el: ElementRef) { 
    this.el = el.nativeElement;
    this.el.style.backgroundColor="blue";

  }

  @Input()
selected: boolean =false;
  onMouseEnter(){
    this.el.style.backgroundColor="red";
  }

  onMouseLeave(){
    if(!this.selected)
      this.el.style.backgroundColor="blue";
  }

  onMouseClick(){
    this.selected = true;
    this.el.style.backgroundColor="green";
  }
}
