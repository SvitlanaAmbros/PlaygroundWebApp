import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@core/header/header.component';
import { FooterComponent } from '@core/footer/footer.component';
import { NavMenuComponent } from '@core/nav-menu/nav-menu.component';
import { PersonalInfoModule } from '@personal-info/personal-info.module';
import { ScheduleModule } from '@schedule/schedule.module';
import { TicketsModule } from '@tickets/tickets.module';
import { AuthorizationModule } from '@authorization/authorization.module';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseHttpInterceptor } from './core/interceptors/http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    StorageServiceModule,
    SharedModule,
    AuthorizationModule,
    PersonalInfoModule,
    ScheduleModule,
    TicketsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
