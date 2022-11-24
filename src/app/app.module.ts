import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { AddProductComponent } from './core/add-product/add-product.component';
import { FormproductComponent } from './core/formproduct/formproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductComponent,
    NavComponent,
    FooterComponent,
    NotfoundComponent,
    LoginComponent,
    DetailProductComponent,
    AddProductComponent,
    FormproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
