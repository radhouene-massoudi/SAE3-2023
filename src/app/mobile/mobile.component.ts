import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  listProdcut=[
    {id: 1, title: "Mobile 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "Mobile 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "Mobile 3", price: 16, quantity: 8, like: 0}, ]
  constructor() { }

  ngOnInit(): void {
  }

}
