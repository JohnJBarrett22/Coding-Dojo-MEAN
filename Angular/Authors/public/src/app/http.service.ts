import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient) {}

  getAllAuthors(){
    return this._http.get("/authors");
  }

  getOneAuthor(id:string){
    return this._http.get("/editAuthor/"+id);
  }

  addAuthor(newAuthor){
    console.log("IN SERVICE")
    return this._http.post('/authors', newAuthor);
  }

  editAuthor(id:string, editAuthor:object){
    return this._http.put(`/authors/${id}`, editAuthor);
  }

  deleteAuthor(id:string){
    return this._http.delete(`/delete/${id}`);
  }
}