import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { LoginUserInfo } from '@shared/models/login-user-info.model';
import { UserInfo } from '@app/shared/models/user-info.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  user = {
    name: 'user',
    surname: 'someuser',
    email: 'ksajkja@gmail.com',
    password: '1234',
    confirmedPassword: '1234',
    isStudent: false,
    studentTicket: 'KB111111'
  };

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      name: [this.user.name, Validators.compose([
        Validators.pattern('^[a-zA-Z]{2,}$'),
        Validators.required
      ])],
      surname: [this.user.surname, Validators.compose([
        Validators.pattern('^[a-zA-Z]{2,}$'),
        Validators.required
      ])],
      email: [this.user.email, Validators.compose([
        Validators.pattern('^[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{3,}$'),
        Validators.required
      ])],
      password: [this.user.password, Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      confirmedPassword: [this.user.confirmedPassword, Validators.compose([
        Validators.required,
        // Validators.minLength(4)
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
      this.submitted = false;
      this.t.removeAt(1);

      while (this.t.length !== 0) {
        this.t.removeAt(0);
      }
      // this.dynamicForm.reset();
      // this.t.clear();
    }
  }

  public isFormInvalid(form: FormGroup, field): boolean {
    return form.invalid &&
      (form.controls[field].dirty || form.controls[field].touched);
  }
}
