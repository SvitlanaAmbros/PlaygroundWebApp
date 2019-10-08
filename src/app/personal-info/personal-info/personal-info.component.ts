import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { PersonalInfoService } from '@personal-info/services/personal-info.service';
import { UserInfo } from '@shared/models/user-info.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  public user: UserInfo = {
    name: undefined,
    surname: undefined,
    login: undefined,
    password: undefined,
    studentTicket: undefined,
  };
  public isEdited = false;
  public isActionPerformed = false;

  public dynamicForm: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder,
    private userService: PersonalInfoService) { }

  ngOnInit() {
    this.initializeForm();

    this.userService.getBaseUserInfo().subscribe(user => {
      this.user = { ...user, isStudent: !!user.studentTicket};
      this.changedIsStudentValue();
      console.log('User from storage', this.user);
    });
  }

  public editPersonalInfo(): void {
    this.isEdited = !this.isEdited;
  }

  public savePersonalInfo(): void {
    this.isEdited = !this.isEdited;

    console.log('@@@', this.user);
    this.isActionPerformed = true;
    this.userService.updateUserInfo(this.user)
      .pipe(
        finalize(() => this.isActionPerformed = false)
      )
      .subscribe(res => console.log('!!!!!!!', res));
  }

  // user: UserInfo  = {
  //   name: 'user',
  //   surname: 'someuser',
  //   login: 'ksajkja@gmail.com',
  //   password: '1234',
  //   confirmPassword: '1234',
  //   isStudent: false,
  //   studentTicket: 'KB111111'
  // };


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
      confirmedPassword: [this.user.confirmPassword, Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      isStudent: [this.user.isStudent],
      tickets: new FormArray([])
    });
  }

  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }

  public changedIsStudentValue() {
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
      delete this.user.studentTicket;

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
  }
}
