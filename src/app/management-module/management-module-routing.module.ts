import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSignInComponent } from './management-components/admin-management/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './management-components/admin-management/admin-sign-up/admin-sign-up.component';
import { SignUpComponent } from './management-components/user-management/sign-up/sign-up.component';
import { UserLoginComponent } from './management-components/user-management/user-login/user-login.component';
import { ManagementModuleComponent } from './management-module.component';

const routes: Routes = [
  { path: '', component: ManagementModuleComponent,
children:[
  {path:'',component:UserLoginComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-signup',component:SignUpComponent},
  {path:'admin-signin',component:AdminSignInComponent},
  {path:'admin-signup',component:AdminSignUpComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementModuleRoutingModule { }
