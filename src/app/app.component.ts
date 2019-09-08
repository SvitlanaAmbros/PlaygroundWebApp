import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { LocalStorageService } from './shared/services/local-storage.service';

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

  constructor(private localStorage: LocalStorageService){}

  ngOnInit(): void {
    // console.log('');
    // this.localStorage.saveInLocalStorage('user', '');
    // this.localStorage.saveInLocalStorage('password', '');
    // this.localStorage.saveInLocalStorage('isAuthenticated', false);
    this.user.login = this.localStorage.getFromLocalStorage('login');
    this.user.password = this.localStorage.getFromLocalStorage('password');
    this.user.isAuthenticated = this.localStorage.getFromLocalStorage('isAuthenticated');
  }
  
}
