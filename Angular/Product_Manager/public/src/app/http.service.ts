import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    console.log("~Service: getAllProducts() initialized~");
    return this._http.get("/api/products");
  }

  getOneProduct(id:string){
    console.log("~Service: getOneProduct() initialized~", id);
    return this._http.get("/api/products/"+id);
  }

  postProduct(productObj){
    console.log("~Service: postProduct() initialized~", productObj);
    return this._http.post("/api/add", productObj);
  }

  editProduct(id:string, editProduct:object){
    console.log("~Service: editProduct() initialized~", editProduct);
    return this._http.put("/api/edit/"+id, editProduct);
  }

  deleteProduct(id:string){
    console.log("~Service: deleteProduct() initialized~", id);
    return this._http.delete("/api/delete/"+id);
  }
}