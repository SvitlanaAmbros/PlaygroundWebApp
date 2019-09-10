import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { UserInfoService } from '../../shared/services/user-info.service';
import { UserInfo } from '../../shared/model/user-info.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title = 'Авторизуватись';
  public user: UserInfo = {
    login: 'Svitlana',
    password: '1234',
    isAuthenticated: true
  };

  constructor(private router: Router,
    private localStorage: LocalStorageService,
    private ref: ChangeDetectorRef,
    private userService: UserInfoService) { }

  ngOnInit() {
  }

  public login(): void {
    // this.localStorage.saveInLocalStorage('user', 'user');
    // this.localStorage.saveInLocalStorage('password', 'password');
    // this.localStorage.saveInLocalStorage('isAuthenticated', true);
    // this.ref.detectChanges();
    this.userService.updateUserInfo(this.user);
    this.router.navigateByUrl('personal-user-info');
  }

  public isFormAvailable(f: FormGroup): boolean {
    return ;
  }
}
