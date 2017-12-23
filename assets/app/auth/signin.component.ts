import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {
    mySigninForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.mySigninForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required),
        });
    }

    onSubmit() {
        const user = new User(
            this.mySigninForm.value.email,
            this.mySigninForm.value.password
        );
        this.authService.signin(user)
            .subscribe(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                this.router.navigateByUrl('/');
            });
    }
}
