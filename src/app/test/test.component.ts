import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,AfterViewInit {
class="4SAE3 is the best";
color='red';
Q=0;
Products:Product[]=[
  {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
  {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
  constructor() {
    console.log('cons')
   }

   ngOnInit(): void {
    console.log('oninit')
  }
  ngAfterViewInit(): void {
    console.log('after view init')
  }
 
  showMsg(){
    console.log('test')
  }
getColor(t:any){
  this.color=t
}
}
