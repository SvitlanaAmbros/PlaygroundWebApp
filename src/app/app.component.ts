import { Component, ViewEncapsulation, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LocalStorageService } from '@shared/services/local-storage.service';
import { UserInfoService } from '@shared/services/user-info.service';
import { LoginUserInfo } from '@shared/models/login-user-info.model';
import { UserInfo } from './shared/models/user-info.model';
import { Router } from '@angular/router';

export const LOGIN = 'login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public title = 'app';
  public isAuthenticated = false;

  public user: UserInfo;
  // user: LoginUserInfo = {
  //   login: '',
  //   password: ''
  // };

  public subscription: Subscription;

  constructor(private localStorage: LocalStorageService,
    private userService: UserInfoService,
    private router: Router) { }

  ngOnInit(): void {
    if (!!this.localStorage.getFromLocalStorage(LOGIN)) {
      this.user = this.localStorage.getUserInfoFromLocalStorage();
      // this.userService.updateUserInfo(this.user);
      this.router.navigateByUrl('schedule');
      this.isAuthenticated = true;
      console.log('User', this.user);
    }
    this.subscription = this.userService.getUserInfo().subscribe(
      user => {
        if (!!user) {
          this.user = user;
          this.isAuthenticated = true;
        } else {
          this.user = null;
          this.isAuthenticated = false;
        }
        console.log('User login', this.user, this.isAuthenticated);
      });
    // }
    // console.log(this.localStorage.getFromLocalStorage('123'));


    // console.log('');
    // this.localStorage.saveInLocalStorage('user', '');
    // this.localStorage.saveInLocalStorage('password', '');
    // this.localStorage.saveInLocalStorage('isAuthenticated', false);
    // this.user.login = this.localStorage.getFromLocalStorage('login');
    // this.user.password = this.localStorage.getFromLocalStorage('password');
    // this.user.isAuthenticated = this.localStorage.getFromLocalStorage('isAuthenticated');
  }
}
