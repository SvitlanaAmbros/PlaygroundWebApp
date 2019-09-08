import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title: string = 'Авторизуватись';

  constructor(private router: Router, 
    private localStorage: LocalStorageService, 
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  public login():void {
    this.localStorage.saveInLocalStorage('user', 'user');
    this.localStorage.saveInLocalStorage('password', 'password');
    this.localStorage.saveInLocalStorage('isAuthenticated', true);
    this.router.navigateByUrl('personal-user-info');
    this.ref.detectChanges();
  }

  public isFormAvailable(f: FormGroup): boolean {
    return ;
  } 

}
