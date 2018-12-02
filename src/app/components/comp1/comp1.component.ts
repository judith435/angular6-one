import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  template: '<div class="pink">hello judy</div>',
  styles: ['.pink{color:pink; fontsize:20; background-color:black}']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
