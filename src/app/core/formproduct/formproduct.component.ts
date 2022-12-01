import { Component, OnInit } from '@angular/core';
import { ProductService } from '../serviceproduct/product.service';

@Component({
  selector: 'app-formproduct',
  templateUrl: './formproduct.component.html',
  styleUrls: ['./formproduct.component.css']
})
export class FormproductComponent implements OnInit {
product:any=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    
  }
addElementToTab(data:any){
this.product.push(data);
}
addP(f:any){
  this.productService.addProduct(f).subscribe(
    ()=>{
      console.log('added')
    },
    (err)=>{
      

    }
  );
}
}
