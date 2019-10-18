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
    confirmPassword: undefined,
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
      this.user = { ...user, isStudent: !!user.studentTicket, confirmPassword: user.password};
      // this.changedIsStudentValue();
      console.log('User from storage', this.user);
    });
  }

  public cancel(): void {
    this.toggleEditing();
  }

  public editPersonalInfo(): void {
    this.toggleEditing();

    this.userService.getBaseUserInfo().subscribe(user => {
      this.user = { ...user, confirmPassword: user.password};
      console.log('User from storage', this.user);
    });
  }

  public savePersonalInfo(): void {
    this.toggleEditing();

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

  public toggleEditing(): void {
    this.isEdited = !this.isEdited;
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
      password: [this.user.password, Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      confirmPassword: [this.user.confirmPassword, Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
    });
  }

  public isFormInvalid(form: FormGroup, field): boolean {
    return form.invalid &&
      (form.controls[field].dirty || form.controls[field].touched);
  }

  // public register(): void {
  //   console.log(this.user);
  // }
}
