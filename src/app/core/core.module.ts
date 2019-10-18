import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BaseHttpInterceptor } from '@core/interceptors/http-interceptor';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseHttpInterceptor,
      multi: true
    }
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavMenuComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavMenuComponent
  ]
})
export class CoreModule { }
