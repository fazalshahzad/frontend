import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D0ashboardComponent } from './admin-components/d0ashboard/d0ashboard.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [
  { path: '', component: AdminModuleComponent,
children:[
  {path:'',component:D0ashboardComponent}
] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
