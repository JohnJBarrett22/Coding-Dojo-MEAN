import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    constructor(private _httpService: HttpService){}
    title = "Restful Tasks API"
    tasks = [];
    task = "";
    selectedTask;

    ngOnInit(){
    
    }

    getTasksFromService(){
      let observable = this._httpService.getTasks();
      observable.subscribe(data => 
        {console.log("Got our tasks!", data)
        this.tasks = data["task"]
      });
    }

    info(idx){
      this.selectedTask = this.tasks[idx];
    }
}