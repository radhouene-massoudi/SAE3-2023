import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
tab=['a','b']
  constructor() { }
  showMsg(){
    console.log('test')
  }
  addElementToTab(a:any){
    this.tab.push(a)
    console.log(this.tab)
  }
  showObs(){
    return new Observable(
      ()=>{
        console.log('obs test')
      }
    )
     }
}
