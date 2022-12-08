import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../serviceproduct/product.service';

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})
export class RemoveproductComponent implements OnInit {
id:any;
  constructor(private s:ProductService,
    private ac:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['idofproducttoremoveit']
    this.s.removeProduct(this.id).subscribe(
      ()=>{
//console.log('removed')
this.router.navigate(['products'])
      }
    );
  }

}
