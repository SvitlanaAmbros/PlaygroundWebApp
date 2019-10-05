import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '@shared/services/user-info.service';
import { LoginUserInfo } from '@app/shared/models/login-user-info.model';

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
        // this.router.navigateByUrl('/authorization');

        // if (this.isAuthenticated) {
        //     const user: LoginUserInfo = {
        //         login: undefined,
        //         password: undefined
        //     };

        //     // this.userService.updateUserInfo(user);
        // }
    }

}
