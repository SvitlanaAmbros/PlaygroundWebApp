import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LocalStorageService } from '@shared/services/local-storage.service';
import { UserInfoService } from '@shared/services/user-info.service';
import { LoginUserInfo } from '@shared/models/login-user-info.model';
import { NotificationService } from './shared/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'app';

  user: LoginUserInfo = {
    login: '',
    password: '',
    isAuthenticated: false
  };

  subscription: Subscription;

  constructor(private localStorage: LocalStorageService,
    private userService: UserInfoService) { }

  ngOnInit(): void {
    this.subscription = this.userService.getUserInfo().subscribe(user => { this.user = user; });
    // console.log('');
    // this.localStorage.saveInLocalStorage('user', '');
    // this.localStorage.saveInLocalStorage('password', '');
    // this.localStorage.saveInLocalStorage('isAuthenticated', false);
    // this.user.login = this.localStorage.getFromLocalStorage('login');
    // this.user.password = this.localStorage.getFromLocalStorage('password');
    // this.user.isAuthenticated = this.localStorage.getFromLocalStorage('isAuthenticated');
  }
}
