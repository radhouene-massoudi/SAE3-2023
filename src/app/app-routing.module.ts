import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { AddProductComponent } from './core/add-product/add-product.component';
import { FormproductComponent } from './core/formproduct/formproduct.component';
import { ProductsComponent } from './core/products/products.component';
import { RemoveproductComponent } from './core/removeproduct/removeproduct.component';
import { UpdateproductComponent } from './core/updateproduct/updateproduct.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  // la liste des routes
  //{path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'products',component:ProductsComponent},
  {path:'update/:idupdate',component:UpdateproductComponent},
  {path:'remove/:idofproducttoremoveit',component:RemoveproductComponent},
  {path:'c1',component:C1Component},
  {path:'c2',component:C2Component},
  {path:'forms',component:FormproductComponent},
  {path:'product/add',component:AddProductComponent},
  {path:'detail/:id/:name',component:DetailProductComponent},
  {path:'home',component:TestComponent},
  {path:'product',component:ProductComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
