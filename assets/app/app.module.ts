import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MessageModule } from './messages/message.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';

import { ErrorComponent } from './errors/error.component';

import { ErrorService } from './errors/error.service';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpClientModule,
        MessageModule,
        AuthModule
    ],
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    providers: [
        ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
