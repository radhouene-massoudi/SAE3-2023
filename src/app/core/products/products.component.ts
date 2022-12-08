import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ProductService } from '../serviceproduct/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
list!:Produit[];
  constructor(private s:ProductService) { }

  ngOnInit(): void {
    
this.s.fetchProducts().subscribe(
  (data)=>{
    this.list=data;
    //console.log(data)
  }
);

  }

}
