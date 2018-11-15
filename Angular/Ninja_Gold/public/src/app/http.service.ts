import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }

  createUser(){
    return this._http.get("/users/new");
  }

  updateUserInfo(user_id, gold, log) {
    let data = {
      'gold': gold,
      'log': log
    }
    return this._http.put(`/users/${user_id}`, data);
  }
}