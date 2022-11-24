import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formproduct',
  templateUrl: './formproduct.component.html',
  styleUrls: ['./formproduct.component.css']
})
export class FormproductComponent implements OnInit {
product:any=[];
  constructor() { }

  ngOnInit(): void {
  }
addElementToTab(data:any){
this.product.push(data);
}
}
