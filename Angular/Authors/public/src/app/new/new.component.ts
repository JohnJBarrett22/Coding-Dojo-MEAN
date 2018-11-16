import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor = {};
  response: any;
  error: string;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.error="";
  }

  authorSubmit(){
    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe((data:any) => {
      if(data.error){
        this.error = data.error.errors.name.message
      }
      else{
      console.log("~Create Author~");
      this.newAuthor = { name: "" }
      }   
    })
  }
}
