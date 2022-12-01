import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
})
export class C2Component implements OnInit {

  constructor(private s:FirstService) { }

  ngOnInit(): void {
    this.s.addElementToTab('SAE5555');
    this.s.showObs().subscribe(
      ()=>{

      }
    );
  }

}
