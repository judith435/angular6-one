import { Component, OnInit } from '@angular/core';
import { CalcService} from '../../services/calc.service';
import { CalcPrivateService} from '../../services/calc-private.service'
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  providers: [CalcPrivateService]
})
export class Comp2Component implements OnInit {

  constructor(public s: CalcService, public ps: CalcPrivateService) { }

  ngOnInit() {
  }
  clicky(){
    this.s.value++;
    this.ps.privateNumber++; 
  }
}
