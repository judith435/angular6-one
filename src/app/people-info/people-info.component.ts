import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.css']
})
export class PeopleInfoComponent implements OnInit {
arrFiltered;
  constructor() { }

  ngOnInit() {
    this.arrFiltered  = this.arr;
  }
  itemSelected(selectedItem) {
    debugger
    if(selectedItem != '0')
    {
      //this.arrFiltered = this.arr.filter(x => x.id == selectedItem);
      this.arrFiltered = this.arr.filter(x => x.gender == 'male');

    }
    else {
      this.arrFiltered = this.arr;
    }

  }
  arr=[
    {
      "id": 0,
      "name": "aa",
      "gender": "male",
      "favorite": "melon",
      "date" : "12/16/2018"
    },
    {
      "id": 1,
      "name": "bb",
      "gender": "male",
      "favorite": "mango",
      "date" : "01/12/2018"

    },
    {
      "id": 2,
      "name": "cc",
      "gender": "female",
      "favorite": "apple",
      "date" : "8/31/2015"

    }
  ];

}
