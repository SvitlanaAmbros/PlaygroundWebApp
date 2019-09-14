import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@authorization/login/login.component';
import { RegisterComponent } from '@authorization/register/register.component';
import { AuthorizationComponent } from '@authorization/authorization/authorization.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/authorization',
    pathMatch: 'full'
  },
  {
    path: 'authorization',
    component: AuthorizationComponent,
    children: [
      {
        path: '',
        redirectTo: '/authorization/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent, AuthorizationComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AuthorizationModule { }
