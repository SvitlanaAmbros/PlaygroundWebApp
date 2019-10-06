import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AuthorizationService } from '@authorization/services/authorization.service';
import { WRONG_LOGIN } from '@authorization/authorization/authorization.component';

import { LocalStorageService } from '@shared/services/local-storage.service';
import { UserInfoService } from '@shared/services/user-info.service';
import { NotificationService } from '@shared/services/notification.service';
import { LoginUserInfo } from '@shared/models/login-user-info.model';
import { UserInfo } from '@shared/models/user-info.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title = 'Log in';
  public dynamicForm: FormGroup;
  public isActionPerformed = false;

  public user: LoginUserInfo = {
    login: 'qweqwe@gmail.com',
    password: 'qweqwe'
  };

  constructor(private router: Router,
    private localStorage: LocalStorageService,
    private authService: AuthorizationService,
    private notification: NotificationService,
    private userService: UserInfoService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.dynamicForm = this.formBuilder.group({
      login: [this.user.login, Validators.compose([
        Validators.pattern('^[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{3,}$'),
        Validators.required
      ])],
      password: [this.user.password, Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
    });
  }

  public login(): void {
    this.isActionPerformed = true;
    this.authService.login(this.user)
      .pipe(
        finalize(() => this.isActionPerformed = false)
      )
      .subscribe(
        (res: UserInfo) => {
          console.log(res);
          this.localStorage.saveUserInfoInLocalStorage(res);
          this.router.navigateByUrl('schedule');
          this.userService.updateUserInfo(res);
        },
        err => {
          this.notification.error(WRONG_LOGIN);
        }
      );
    // this.localStorage.saveInLocalStorage('user', 'user');
    // this.localStorage.saveInLocalStorage('password', 'password');
    // this.localStorage.saveInLocalStorage('isAuthenticated', true);
    // this.ref.detectChanges();
    // this.router.navigateByUrl('personal-user-info');
  }

  public isFormInvalid(form: FormGroup, field): boolean {
    return form.invalid &&
      (form.controls[field].dirty || form.controls[field].touched);
  }
}
