import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AuthorizationService } from '@authorization/services/authorization.service';
import { WRONG_LOGIN } from '@authorization/authorization/authorization.component';

import { LocalStorageService } from '@shared/services/local-storage.service';
import { NotificationService } from '@shared/services/notification.service';
import { UserInfoService } from '@shared/services/user-info.service';
import { UserInfo } from '@shared/models/user-info.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public dynamicForm: FormGroup;
  public submitted = false;
  public isActionPerformed  = false;
  public passwordIsEqual = true;

  constructor(private router: Router,
    private localStorage: LocalStorageService,
    private notification: NotificationService,
    private authService: AuthorizationService,
    private userService: UserInfoService,
    private formBuilder: FormBuilder) { }

  user: UserInfo = {
    name: 'user',
    surname: 'someuser',
    login: 'ksajkja@gmail.com',
    password: '1234',
    confirmPassword: '1234',
    isStudent: false,
    studentTicket: undefined
  };

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.dynamicForm = this.formBuilder.group({
      name: [this.user.name, Validators.compose([
        Validators.pattern('^[a-zA-Z]{2,}$'),
        Validators.required
      ])],
      surname: [this.user.surname, Validators.compose([
        Validators.pattern('^[a-zA-Z]{2,}$'),
        Validators.required
      ])],
      email: [this.user.login, Validators.compose([
        Validators.pattern('^[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{3,}$'),
        Validators.required
      ])],
      password: [this.user.password, Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      confirmPassword: [this.user.confirmPassword, Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      isStudent: [this.user.isStudent],
      tickets: new FormArray([])
    });
  }

  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }

  public checked() {
    if (this.user.isStudent) {
      this.t.push(this.formBuilder.group({
        studentTicket: [this.user.studentTicket, Validators.compose([
          Validators.pattern('^KB[1-9]{6}$'),
          Validators.required
        ])],
      }));
    } else {
      this.user.studentTicket = undefined;
      this.submitted = false;
      this.t.removeAt(1);

      while (this.t.length !== 0) {
        this.t.removeAt(0);
      }
    }
  }

  public isFormInvalid(form: FormGroup, field): boolean {
    return form.invalid &&
      (form.controls[field].dirty || form.controls[field].touched);
  }

  public register(): void {
    console.log(this.user);

    this.isActionPerformed = true;
    this.authService.register(this.user)
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
  }

  public focusOutFunction(): void {
    // this.user.password === this.user.confirmPassword ?
    //     this.passwordIsEqual = true : this.passwordIsEqual = false;
    // console.log('!!', this.user.password !== this.user.confirmPassword);
  }
}
