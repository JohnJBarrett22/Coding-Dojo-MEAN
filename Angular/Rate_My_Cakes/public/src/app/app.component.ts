import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  cake = "";
  cakes = [];
  newCake: any;
  newRating = { rating: "", comment: "" };
  selectedCake;
  avg;

  constructor(private _httpService: HttpService){
  }

  ngOnInit(){
    this.getCakesFromService()
    this.newCake = { baker: "", image: ""}
  }
  
  getCakesFromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data => { 
      console.log("~Loading All Cakes~", data)
      this.cakes = data["cake"]
    });
  }

  cakeSubmit(){
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("~Create Cake~");
    })
    this.newCake = { baker: "", image: "" }
    this.getCakesFromService();
  }
  ratingSubmit(cakeId){
    console.log(cakeId);
    let observable = this._httpService.addRating(this.newRating, cakeId);
    observable.subscribe(data => {
      console.log("~Create Comment~");
    })
    this.newRating = { rating: "", comment: "" }
    this.getCakesFromService();
  }

  info(idx){
    this.selectedCake = this.cakes[idx];
    var sum = 0;
    for(var i = 0; i < this.selectedCake.ratings.length; i++){
      sum += this.selectedCake.ratings[i].rating;
    }
    this.avg = sum/this.selectedCake.ratings.length;
  }
}
