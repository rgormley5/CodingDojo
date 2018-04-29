import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(
    private _service: ServiceService
  ) { }

  coins = this._service.shintoCoinsOwned;
  value = this._service.shintoCoinValue;

  ngOnInit() {
  }

  submitSell() {
    console.log("sold a coin!");
    this.coins--;
    this.value--;
    console.log("coins is: ", this.coins);
    console.log("value is: ", this.value);
  }

}
