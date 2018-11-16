import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
author: object;
editName: any;
error: any;

  constructor(private _httpService: HttpService, private _router:Router, private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this.findAuthor();
    this.editName = {name: ""};
    this.author = {author: {name: ""}};
    
  }

  findAuthor(){
    this._route.params.subscribe((params)=>{
      console.log("~The ID in the URL is:", params["id"])
      let observable = this._httpService.getOneAuthor(params["id"]);
      observable.subscribe((data:any)=>{
        this.author = data;
        console.log("moo", this.author);
      })
    })
  }

  editSubmit(){
    this._route.params.subscribe((params)=>{
      let observable = this._httpService.editAuthor(params['id'], this.editName);
      observable.subscribe((data:any) => {
        if(data.error){
          this.error = data.error.errors.name.message
        }
        else{
          console.log("~Edit~");
          this._router.navigate(['/home']);
        }
      })
    })
  }
}