import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {
    mySigninForm: FormGroup;

    constructor() { }

    ngOnInit() {
        this.mySigninForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required),
        });
    }

    onSubmit() {

    }
}
