import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  interpolation = "generated by interpolation";
  attribute = "<h1>Header by attribute</h1>";
  IsColoringActive = true;
  objStyle={
    'background-color' : 'lime',
    'font-size' : '35px'
  }
  objClass={
    aquaClass : true,
    largeClass : true
  }

  constructor() { }

  ngOnInit() {
  }


  showMe() {
    alert("clicked Me!!!");
  }

  changeMe():string {
    return "25";
  }

  showX(item:string) {
    alert(item);
  }
}
