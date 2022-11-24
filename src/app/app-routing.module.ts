import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './core/add-product/add-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  // la liste des routes
  //{path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
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
