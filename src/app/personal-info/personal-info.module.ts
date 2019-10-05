import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PersonalInfoComponent } from '@personal-info/personal-info/personal-info.component';
import { PersonalInfoService } from '@personal-info/services/personal-info.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [
  {
    path: 'personal-user-info',
    component: PersonalInfoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [
    PersonalInfoComponent
  ],
  providers: [
    PersonalInfoService
  ],
  exports: [
    PersonalInfoComponent,
    RouterModule
  ]
})
export class PersonalInfoModule { }
