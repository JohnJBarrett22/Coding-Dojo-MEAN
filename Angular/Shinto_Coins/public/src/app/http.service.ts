import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  coinValue = 1;
  yourCoins = 0;
  journal = [];
  trans: any;

  constructor(private _http: HttpClient) { }

  coinTrans(action, qty): void {
    let transId = Math.floor(1 + Math.random() * (9999 - 1));
    let trans = {
      id: transId,
      action: action,
      qty: qty,
      value: this.coinValue
    }
    this.journal.push(trans);
  }

  buyCoin(qty): void {
      this.yourCoins += qty;
      this.coinValue += qty;
      this.coinTrans('Bought', qty)
  }

  sellCoin(qty): void {
    if(this.yourCoins >= qty){
      this.yourCoins -= qty;
      this.coinValue -= qty;
      this.coinTrans('Sold', qty)
    } 
    else {
      console.log('Not enough coins');
    }
  }

  findTrans(id) {
    this.trans = this.journal.find(o => o.id == id);
  }

  getTrivia() {
    return this._http.get('https://opentdb.com/api.php?amount=50&difficulty=hard&type=multiple')
  }
}