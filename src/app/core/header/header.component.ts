import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() userLogin: string = '';
    @Input() isAuthenticated: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    public navigateToLoginPage(): void {
        this.router.navigateByUrl('/authorization');
    }

}
