import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myArray: string[] = ["aa", "bb", "cc"];
  rows = [1,2,3,4,5,6,7,8,9,10];
}
