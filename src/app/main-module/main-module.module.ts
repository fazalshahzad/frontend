import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { ProductsComponent } from './main-components/products/products.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
