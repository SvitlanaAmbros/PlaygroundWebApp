import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title: string = 'Авторизуватись';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public login():void {
    this.router.navigateByUrl('personal-user-info');
  }

  public isFormAvailable(f: FormGroup): boolean {
    return ;
  } 

}
