import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getTasks(){
  return this._http.get("/tasks");
  }

  getTasksById(id:string){
    return this._http.get("/tasks/:id");
  }

  addTask(newtask){
    return this._http.post('/tasks', newtask);
  }

  editTask(editTask){
    return this._http.put(`/tasks/${editTask._id}`, editTask);
  }

  deleteTask(task){
    return this._http.delete(`/tasks/${task._id}`, task);
  }
}