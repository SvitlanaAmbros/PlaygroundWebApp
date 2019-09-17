import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginUserInfo } from '@shared/models/login-user-info.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public title = 'Register';

  public user = {
    name: 'Svitlana',
    surname: 'Surname',
    login: 'anil.singh581@gmail.com'
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.user.name, Validators.required],
      surname: [this.user.surname, Validators.required],
      login: [this.user.login, Validators.compose([Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')])]
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

}
