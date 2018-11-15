import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = "Restful Tasks API"
  tasks = [];
  task = "";
  green = false;
  newTask: any;
  editTask: any;
  editTog: boolean = false;

  constructor(private _httpService: HttpService){
  }

  ngOnInit(){
    this.getTasksFromService()
    this.newTask = { title: "", description: "" }
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => { 
      console.log("~Loading All Tasks~", data)
      this.tasks = data["task"]
      this.green = true;
    });
  }

  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("~Create~");
      this.newTask = { title: "", description: "" }
      this.getTasksFromService();
    })
  }

  editForm(task){
    this.editTask = {_id: task._id, title: task.title, description: task.description}
    this.editTog = true;
  }

  onEdit(){
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      console.log("~Edit~");
      this.editTog = false;
      this.getTasksFromService();
    })
  }

  onDelete(task){
    let observable = this._httpService.deleteTask(task);
    observable.subscribe(data => {
      console.log("~Delete~");
      this.getTasksFromService();
  }

  // info(idx){
  //   this.task = this.tasks[idx];
  // }
}