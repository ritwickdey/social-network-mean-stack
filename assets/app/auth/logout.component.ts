import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-logout',
    template: `
        <div class="col-md-8 offset-md-5">
            <button (click)="onLogout()" class="btn btn-danger">Logout</button>
        </div>
    `
})

export class LogoutComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }
}