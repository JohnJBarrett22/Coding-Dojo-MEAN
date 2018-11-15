import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  user;
  user_id;
  gold;
  adventureLog = [];

  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
    this.createUserService();
  }

  createUserService() {
    let observable = this._httpService.createUser();
    observable.subscribe( (data) => {
      this.user = data;
      this.user_id = this.user.data._id;
      this.gold = this.user.data.gold;
    })
  }

  updateUserInfo(user_id, gold, log) {
    let observable = this._httpService.updateUserInfo(user_id, gold, log);
    observable.subscribe();
  }

  random(min, max){
  	return (Math.floor(Math.random() * (min-max))+ max)
  }

  setGold(gold) {
    this.gold += gold;
  }

  farm() {
    let goldFound = this.random(2,6);
    this.setGold(goldFound);
    let msg = `You found ${goldFound} at the farm.`;
    this.adventureLog.push(msg);
    this.updateUserInfo(this.user_id, goldFound, msg);
  }

  cave() {
    let goldFound = this.random(5,11);
    this.setGold(goldFound);
    let msg = `You found ${goldFound} at the cave.`;
    this.adventureLog.push(msg);
    this.updateUserInfo(this.user_id, goldFound, msg);
  }

  house() {
    let goldFound = this.random(7,16);
    this.setGold(goldFound);
    let msg = `You found ${goldFound} at the house.`;
    this.adventureLog.push(msg);
    this.updateUserInfo(this.user_id, goldFound, msg);
  }

  casino() {
    let goldFound = this.random(-100,101);
    this.setGold(goldFound);
    let msg = '';
    if (goldFound >= 0 ) {
      msg = `You found ${goldFound} at the casino.`;
    }
    else {
      msg = `You lost ${goldFound * -1} at the casino.`;
    }
    this.adventureLog.push(msg);
    this.updateUserInfo(this.user_id, goldFound, msg);
  }
}