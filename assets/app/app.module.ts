import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MessageModule } from './messages/message.module';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';

import { ErrorComponent } from './errors/error.component';

import { ErrorService } from './errors/error.service';
import { AuthService } from './auth/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpClientModule,
        MessageModule
    ],
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    providers: [
        ErrorService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
