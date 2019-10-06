import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { authorizationMenu } from '@authorization/models/authorization.model';

export const WRONG_LOGIN = 'Something went wrong! Try again';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  public menu = authorizationMenu;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateTo(item): void {
    this.router.navigateByUrl(item.url);
  }
}
