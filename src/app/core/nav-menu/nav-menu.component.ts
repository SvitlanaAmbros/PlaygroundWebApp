import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
    public menu = [ 
        {
            title: 'Особистий кабінет',
            url: 'personal-user-info'
        }, 
        {
            title: 'Розклад',
            url: 'schedule'
        }, 
        {
            title: 'Актуальні квитки',
            url: 'tickets'
        }  
    ];
    constructor() { }

    ngOnInit() {
    }
}
