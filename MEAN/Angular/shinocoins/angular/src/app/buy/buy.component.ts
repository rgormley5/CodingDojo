import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(
    private _service: ServiceService 
  ) { }

  value: Number = this._service.shintoCoinValue
  coins: Number = this._service.shintoCoinsOwned

  ngOnInit() {
  }

  submitBuy(num) {
    console.log("bought a coin!")
    console.log("this.coin is: ", this.coins)
    console.log("num is: ", num);
    console.log("num type is: ", num.type);
    this.value += num;
    this.coins += num;
    console.log("value is: ", this.value);
    console.log("coins are: ", this.coins);
  }

}
