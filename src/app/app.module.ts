import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavMenuComponent } from './core/nav-menu/nav-menu.component';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { ScheduleModule } from './schedule/schedule.module';
import { TicketsModule } from './tickets/tickets.module';
import { AuthorizationModule } from './authorization/authorization.module';

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
    AuthorizationModule,
    PersonalInfoModule,
    ScheduleModule,
    TicketsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
