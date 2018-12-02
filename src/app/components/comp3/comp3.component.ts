import { Component, OnInit } from '@angular/core';
import { CalcService} from '../../services/calc.service';
import { CalcPrivateService} from '../../services/calc-private.service'

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css'],
  providers: [CalcPrivateService]

})
export class Comp3Component implements OnInit {

  constructor(public s: CalcService, public ps: CalcPrivateService) { }
  clicky(){
    this.s.value++;
    this.ps.privateNumber++; 

  }

  ngOnInit() {
  }

}
