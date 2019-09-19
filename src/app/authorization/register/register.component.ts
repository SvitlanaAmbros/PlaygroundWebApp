import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginUserInfo } from '@shared/models/login-user-info.model';
import { UserInfo } from '@app/shared/models/user-info.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public title = 'Register';

  public user: UserInfo = {
    name: 'Svitlana',
    surname: 'Surname',
    login: 'anil.singh581@gmail.com',
    password: '123',
    confirmPassword: '123',
    studentTicket: ''
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.user.name, Validators.required],
      surname: [this.user.surname, Validators.required],
      login: [this.user.login, Validators.compose([Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')])],
      password: [this.user.password, Validators.required],
      confirmPassword: [this.user.confirmPassword, Validators.required],
      studentTicket: [this.user.studentTicket, Validators.required],
      isStudent: [this.user.isStudent]
    });
    // this.form = new FormGroup({
    //     name: new FormControl(),
    //     surname: new FormControl()
    // });
  }

  public register(): void {
    (<FormGroup>this.form)
      .setValue(this.user, { onlySelf: true });
    console.log('Register', this.user);
  }

  public isInputValid(controlName: string): boolean {
    return !this.form.controls[controlName].valid
    && (this.form.controls[controlName].dirty || this.form.controls[controlName].touched);
  }

  public isStudent(isStudent: boolean): void {
    console.log(isStudent);

    // if (isStudent) {
    //   // this.form.addControl('studentTicket', this.fb.control(this.user.studentTicket,
    //     Validators.required));
    // } else {
    //   this.user.studentTicket = '';
    //   this.form.removeControl('studentTicket');
    // }
  }
}
