import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
identi:any;
  constructor(private s:ActivatedRoute) { }

  ngOnInit(): void {
    this.s.params.subscribe(
      (t)=>console.log(t)
    );
    this.identi=this.s.snapshot.params['id'];
    console.log(this.identi);
    console.log(this.s.snapshot.params['name']);
  }

}
