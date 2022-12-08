import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/model/produit';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.baseurl;
  constructor(private http: HttpClient) { }

  addProduct(data: any) {
    return this.http.post(this.url + 'products', data)
  }
  fetchProducts():Observable<Produit[]>{
    return this.http.get<Produit[]>('http://localhost:3000/products')
  }
  removeProduct(id: any) {
    return this.http.delete('http://localhost:3000/products/' + id)
  }
  updateProduct(id: any, data: any) {
    return this.http.put('http://localhost:3000/products/' + id, data)
  }
  findById(id: any):Observable<Produit> {
    return this.http.get<Produit>('http://localhost:3000/products/' + id)
  }
}

