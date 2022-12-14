import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { ProductsComponent } from './core/products/products.component';
import { RemoveproductComponent } from './core/removeproduct/removeproduct.component';
import { UpdateproductComponent } from './core/updateproduct/updateproduct.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShowoneproductComponent } from './showoneproduct/showoneproduct.component';
import { ErrorsComponent } from './errors/errors.component';
import { ValidationwithinputComponent } from './validationwithinput/validationwithinput.component';

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
    FormproductComponent,
    C1Component,
    C2Component,
    ProductsComponent,
    RemoveproductComponent,
    UpdateproductComponent,
    TvComponent,
    MobileComponent,
    ShowoneproductComponent,
    ErrorsComponent,
    ValidationwithinputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
