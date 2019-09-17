import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@authorization/login/login.component';
import { RegisterComponent } from '@authorization/register/register.component';
import { AuthorizationComponent } from '@authorization/authorization/authorization.component';

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
          redirectTo: '/authorization/register',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
