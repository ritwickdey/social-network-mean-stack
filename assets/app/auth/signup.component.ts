import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {

    mySignupForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.mySignupForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required),
        });
    }

    onSubmit() {
        console.log(this.mySignupForm.value);

        const user = new User(
            this.mySignupForm.value.email,
            this.mySignupForm.value.password,
            this.mySignupForm.value.firstName,
            this.mySignupForm.value.lastName
        );

        this.authService.signup(user)
            .subscribe(
            data => {
                this.router.navigate(['/auth', 'signin']);
                console.log(data);
            },
            error => console.log(error)
            );
        this.mySignupForm.reset();
    }

}
