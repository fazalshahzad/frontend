import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { BlogComponent } from './main-components/blog/blog.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { HomeComponent } from './main-components/home/home.component';
import { ProductsComponent } from './main-components/products/products.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [
  { path: '', component: MainModuleComponent,
children:[
  {path:'',component:HomeComponent},
  {path:'shop',component:ProductsComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'home',component:HomeComponent},
  {path:'blog',component:BlogComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
