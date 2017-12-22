import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-logout',
    template: `
        <div class="col-md-8 offset-md-2">
            <button (click)="onLogout()" class="btn btn-danger">Logout</button>
        </div>
    `
})

export class LogoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onLogout() {

    }
}