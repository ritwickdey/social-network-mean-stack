import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LogoutComponent } from './logout.component';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [
        LogoutComponent,
        SigninComponent,
        SignupComponent,
    ]
})
export class AuthModule { }
