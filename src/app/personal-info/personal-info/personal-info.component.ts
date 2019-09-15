import { Component, OnInit } from '@angular/core';
import {  } from '@app/shared/models/login-user-info.model';
import { BaseUserInfo } from '@personal-info/models/personal-info.model';
import { PersonalInfoService } from '@personal-info/services/personal-info.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  public user: BaseUserInfo;
  public isEdited = false;

  constructor(private userService: PersonalInfoService) { }

  ngOnInit() {
    this.userService.getBaseUserInfo().subscribe(user => this.user = user);
  }

  public editPersonalInfo(): void {
    this.isEdited = !this.isEdited;
  }

  public savePersonalInfo(): void {
    this.isEdited = !this.isEdited;
  }
}
