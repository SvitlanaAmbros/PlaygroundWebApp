import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from '@authorization/login/login.component';
import { RegisterComponent } from '@authorization/register/register.component';
import { AuthorizationComponent } from '@authorization/authorization/authorization.component';
import { AuthorizationRoutingModule } from '@authorization/authorization-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorizationRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthorizationComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AuthorizationModule { }
