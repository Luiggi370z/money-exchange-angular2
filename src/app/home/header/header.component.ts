import { Component } from '@angular/core';

@Component({
    selector: 'me-header',
    templateUrl: 'header.component.html',
    styleUrls: [ './header.component.css' ],
})

export class HeaderComponent {
    public logo = 'assets/img/logo.jpg';
}
