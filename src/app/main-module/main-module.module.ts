import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { ProductsComponent } from './main-components/products/products.component';
import { ViewProductComponent } from './main-components/view-product/view-product.component';
import { CheckOutComponent } from './main-components/check-out/check-out.component';
import { EditCartComponent } from './main-components/edit-cart/edit-cart.component';
import { PurchaseSuccessFullComponent } from './main-components/purchase-success-full/purchase-success-full.component';
import { PurchaseFailedComponent } from './main-components/purchase-failed/purchase-failed.component';
import { HomeComponent } from './main-components/home/home.component';
import { BlogComponent } from './main-components/blog/blog.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    ProductsComponent,
    ViewProductComponent,
    CheckOutComponent,
    EditCartComponent,
    PurchaseSuccessFullComponent,
    PurchaseFailedComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
