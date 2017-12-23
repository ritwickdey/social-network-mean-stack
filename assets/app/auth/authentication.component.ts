import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-authentication',
    templateUrl: 'authentication.component.html'
})

export class AuthenticationComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() { }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}