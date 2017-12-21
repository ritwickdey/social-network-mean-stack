import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list';
import { MessageInputComponent } from './messages/message-input.component';
import { MessageService } from './messages/messages.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent
    ],
    providers: [
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
