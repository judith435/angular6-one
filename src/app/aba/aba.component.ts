import { Component, OnInit , OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-aba',
  templateUrl: './aba.component.html',
  styleUrls: ['./aba.component.css']
})
export class AbaComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log("aba: ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("aba: ngAfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("aba: ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("aba: ngAfterContentInit");
  }
  ngDoCheck(): void {
    console.log("aba: ngDoCheck");
  }
  ngOnChanges(): void {
    console.log("aba: ngOnChanges");
  }

  constructor() {
    console.log("aba: constructor");
   }

  ngOnInit() {
    console.log("aba: ngOnInit");
  }

}
