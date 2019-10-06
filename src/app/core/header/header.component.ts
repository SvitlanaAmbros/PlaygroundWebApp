import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserInfoService } from '@shared/services/user-info.service';
import { LocalStorageService } from '@shared/services/local-storage.service';

export const LOGIN = 'login';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() userLogin = '';
    @Input() isAuthenticated;

    constructor(private router: Router,
        private userService: UserInfoService,
        private localStorage: LocalStorageService) { }

    ngOnInit() {
        // if (!!this.localStorage.getFromLocalStorage(LOGIN)) {
        //     this.isAuthenticated = true;
        // }
    }

    public logOut(): void {
        if (!!this.localStorage.getFromLocalStorage(LOGIN)) {
            this.localStorage.deleteUserFromLocalStorage();
            this.userService.updateUserInfo(null);
            this.router.navigateByUrl('authorization');
            this.isAuthenticated = false;
        }
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
