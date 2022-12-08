import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProductService } from '../serviceproduct/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
id:any;
p=new Produit();
  constructor(private s :ProductService,
    private ac:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['idupdate'];
    this.s.findById(this.id).subscribe(
      (d)=>{
        console.log('next')
        this.p=d;
      },
      (error)=>{
        switch (error.status){
        case 404: console.log('notfound');
        this.router.navigate(['notfound'])
        break;
        }

      }
      ,
        ()=>{
          console.log('comp')
        }
    )
  }
updateP(f:any){
this.s.updateProduct(this.id,f).subscribe(
  ()=>{
    //console.log('updated')
    this.router.navigate(['products'])
  }
);
}
}
