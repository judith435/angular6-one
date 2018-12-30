import { Component, OnInit } from '@angular/core';
import { createMeta } from '@angular/platform-browser/src/browser/meta';
import { ChangeNameService } from '../change-name.service';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.css']
})

export class PeopleInfoComponent implements OnInit {
    arrFiltered;
    people:any []; 

  constructor(private peopelService: ChangeNameService) { }

  ngOnInit() {
    this.arrFiltered  = this.arr;
    // this.peopelService.getPeople().then(
    //   (peopleList) =>  {
    //     this.people = peopleList;
    //   }).catch() {
    //     (reason) => { console.error("error was:" + reason )}
    //   };
    this.peopelService.subscribe
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

  pipeArray = ['cake', 'ice cream', 'chocolate'];
  searchArg:string;
  filterPipe() {
    alert ("filterPipe!!! ");
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
