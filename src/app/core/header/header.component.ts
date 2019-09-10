import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../../shared/services/user-info.service';
import { UserInfo } from '../../shared/model/user-info.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() userLogin = '';
    @Input() isAuthenticated = false;

    constructor(private router: Router, private userService: UserInfoService) { }

    ngOnInit() {
    }

    public navigateToLoginPage(): void {
        this.router.navigateByUrl('/authorization');

        if (this.isAuthenticated) {
            let user: UserInfo = {
                login: undefined,
                password: undefined,
                isAuthenticated: false
            };

            this.userService.updateUserInfo(user);
        }
    }

}
