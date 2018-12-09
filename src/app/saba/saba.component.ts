import { Component, OnInit , OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-saba',
  templateUrl: './saba.component.html',
  styleUrls: ['./saba.component.css']
})
export class SabaComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log("saba: ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("saba: ngAfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("saba: ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("saba: ngAfterContentInit");
  }
  ngDoCheck(): void {
    console.log("saba: ngDoCheck");
  }
  ngOnChanges(): void {
    console.log("saba: ngOnChanges");
  }

  constructor() {
    console.log("saba: constructor");
   }

  ngOnInit() {
    console.log("saba: ngOnInit");
  }

}
