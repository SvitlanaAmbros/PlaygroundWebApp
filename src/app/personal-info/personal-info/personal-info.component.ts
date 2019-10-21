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
    isStudent: false,
    studentTicket: undefined,
  };
  public isEdited = false;
  public isActionPerformed = false;

  public dynamicForm: FormGroup;
  // public submitted = false;

  constructor(private formBuilder: FormBuilder,
    private userService: PersonalInfoService) { }

  ngOnInit() {
    this.initializeForm();
    this.getUserinfo();
  }

  public cancel(): void {
    this.toggleEditing();
    this.getUserinfo();

    // this.submitted = false;
    this.resetChildForm();
  }

  public editPersonalInfo(): void {
    this.toggleEditing();

    this.getUserinfo();

    if (this.user.studentTicket) {
      this.user.isStudent = true;
      this.checked();
    }
  }

  public getUserinfo(): void {
    this.userService.getBaseUserInfo().subscribe(user => {
      this.user = { ...user, confirmPassword: user.password };

      console.log('User from storage', this.user);
    });
  }

  public savePersonalInfo(): void {
    this.toggleEditing();

    this.isActionPerformed = true;
    this.userService.updateUserInfo(this.user)
      .pipe(
        finalize(() => this.isActionPerformed = false)
      )
      .subscribe(res => console.log('User', res));
  }

  public toggleEditing(): void {
    this.isEdited = !this.isEdited;
  }

  private initializeForm(): void {
    this.dynamicForm = this.formBuilder.group({
      name: [this.user.name, {
        validators: Validators.compose([
          Validators.pattern('^[a-zA-Z]{2,}$'),
          Validators.required
        ]),
        updateOn: 'blur'
      }],
      surname: [this.user.surname, {
        validators: Validators.compose([
          Validators.pattern('^[a-zA-Z]{2,}$'),
          Validators.required
        ]),
        updateOn: 'blur'
      }],
      password: [this.user.password, {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ]),
        updateOn: 'blur'
      }],
      confirmPassword: [this.user.confirmPassword, {
        validators: Validators.compose([
          Validators.required
        ])
      }],
      isStudent: [this.user.isStudent],
      tickets: new FormArray([])
    });
  }

  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }

  public checked() {
    if (this.user.isStudent) {
      if (this.t.length === 0) {
        this.t.push(this.formBuilder.group({
          studentTicket: [this.user.studentTicket,
          {
            validators: Validators.compose([
              Validators.pattern('^KB[0-9]{8}$'),
              Validators.required
            ]),
            // updateOn: 'blur'
          }],
        }));
      }
    } else {
      this.user.studentTicket = '';
      // this.submitted = false;
      this.resetChildForm();
    }
  }

  public isFormInvalid(form: FormGroup, field): boolean {
    return form.invalid &&
      (form.controls[field].dirty || form.controls[field].touched);
  }

  public resetChildForm(): void {
    this.t.removeAt(1);

    while (this.t.length !== 0) {
      this.t.removeAt(0);
    }
  }
}
