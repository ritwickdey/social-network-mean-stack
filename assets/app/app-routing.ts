import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { AUTH_ROUTH } from './auth/auth.routes';

const APP_ROUTE: Routes = [
    {
        path: '',
        redirectTo: '/messages',
        pathMatch: 'full'
    },
    {
        path: 'messages',
        component: MessagesComponent
    },
    {
        path: 'auth',
        component: AuthenticationComponent,
        children: AUTH_ROUTH
    }
];

export const routing = RouterModule.forRoot(APP_ROUTE);