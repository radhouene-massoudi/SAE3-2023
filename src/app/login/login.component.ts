import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private s:FirstService) { }

  ngOnInit(): void {
    this.s.showMsg();
  }

}
