import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
    public menu = [
        {
            title: 'Personal info',
            url: 'personal-user-info'
        },
        {
            title: 'Schedule',
            url: 'schedule'
        },
        {
            title: 'Tickets',
            url: 'tickets'
        }
    ];
    constructor() { }

    ngOnInit() {
    }
}
