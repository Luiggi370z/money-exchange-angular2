import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'me-header',
    templateUrl: 'header.component.html',
    styleUrls: [ './header.component.css' ],
})

export class HeaderComponent implements OnInit {
    public logo = 'assets/img/logo.jpg';

    constructor() { }

    ngOnInit() { }
}