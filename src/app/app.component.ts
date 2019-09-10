import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { LocalStorageService } from './shared/services/local-storage.service';
import { Subscription } from 'rxjs/Subscription';
import { UserInfoService } from './shared/services/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'app';

  user = {
    login: '',
    password: '',
    isAuthenticated: false
  }
  subscription: Subscription;

  constructor(private localStorage: LocalStorageService, 
      private userService: UserInfoService){}

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
