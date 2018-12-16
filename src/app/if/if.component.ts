//son of people-info
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IFComponent implements OnInit {

  constructor() { }
  priceVal: string;
  @Output() priceChange = new EventEmitter<String> ();
  @Input () get price( ) {
    return this.priceVal;
  }
  set price (val) {
    this.priceVal = val;
    this.priceChange.emit(val);
  }
  ngOnInit() {
  }
var1:string;
var2:string = "judith";
var3:number = 0;
}
