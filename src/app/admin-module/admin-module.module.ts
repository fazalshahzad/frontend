import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { D0ashboardComponent } from './admin-components/d0ashboard/d0ashboard.component';
import { ProductsComponent } from './admin-components/products/products.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    D0ashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
