import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StorageServiceModule } from 'angular-webstorage-service';

import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { AuthorizationModule } from '@authorization/authorization.module';
import { PersonalInfoModule } from '@personal-info/personal-info.module';
import { ScheduleModule } from '@schedule/schedule.module';
import { TicketsModule } from '@tickets/tickets.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    StorageServiceModule,
    CoreModule,
    SharedModule,
    AuthorizationModule,
    PersonalInfoModule,
    ScheduleModule,
    TicketsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
