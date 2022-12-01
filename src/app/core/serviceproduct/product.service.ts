import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url=environment.baseurl;
  constructor(private http:HttpClient) { }

  addProduct(data:any){
return this.http.post(this.url+'products',data)
  }
  fetchProducts(){
    return this.http.get('http://localhost:3000/products')
  }
}
