import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';
import { LogoutComponent } from './logout.component';

const AUTH_ROUTH: Routes = [
    {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    }
];

export const authRouting = RouterModule.forChild(AUTH_ROUTH);