import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct = {title: "", price: 0.00, image: ""};
  error = "";

  constructor(private _httpService: HttpService, private _router: Router) {
  }

  ngOnInit(){
  }

  addProduct(){
    console.log("~Component: addProduct() initialzed~")
    var tempObs = this._httpService.postProduct(this.newProduct);
    tempObs.subscribe((data:any)=>{
      console.log("~Component: addProduct() response~", data);
      // this.error = data.error.errors.title.message;     
      if(!data.error){
        console.log("~Component: addProduct() successful~")
        this._router.navigate(["/products"]);
      }
    })
  }
}