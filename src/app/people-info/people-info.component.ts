import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.css']
})
export class PeopleInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arr=[
    {
      "id": 0,
      "name": "aa",
      "gender": "male",
      "favorite": "melon"
    },
    {
      "id": 1,
      "name": "bb",
      "gender": "male",
      "favorite": "mango"
    },
    {
      "id": 2,
      "name": "cc",
      "gender": "female",
      "favorite": "apple"
    }
  ];

}
