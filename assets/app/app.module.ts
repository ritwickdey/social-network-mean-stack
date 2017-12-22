import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list';
import { MessageInputComponent } from './messages/message-input.component';
import { MessageService } from './messages/messages.service';
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { routing } from './app-routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent
    ],
    providers: [
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
