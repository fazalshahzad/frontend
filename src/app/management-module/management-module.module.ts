import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { UserLoginComponent } from './management-components/user-management/user-login/user-login.component';
import { SignUpComponent } from './management-components/user-management/sign-up/sign-up.component';
import { AdminSignUpComponent } from './management-components/admin-management/admin-sign-up/admin-sign-up.component';
import { AdminSignInComponent } from './management-components/admin-management/admin-sign-in/admin-sign-in.component';


@NgModule({
  declarations: [
    ManagementModuleComponent,
    UserLoginComponent,
    SignUpComponent,
    AdminSignUpComponent,
    AdminSignInComponent
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule
  ]
})
export class ManagementModuleModule { }
