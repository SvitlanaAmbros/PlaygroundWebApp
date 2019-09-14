import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { authorizationMenu } from '@authorization/models/authorization.model';

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
