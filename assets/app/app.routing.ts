import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';

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
        loadChildren: './auth/auth.module#AuthModule'
    }
];

export const routing = RouterModule.forRoot(APP_ROUTE);