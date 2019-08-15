import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PersonalInfoComponent
  ],
  exports: [
    PersonalInfoComponent
  ]
})
export class PersonalInfoModule { }
