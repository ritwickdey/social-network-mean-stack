import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MessagesComponent } from './messages.component';
import { MessageInputComponent } from './message-input.component';
import { MessageListComponent } from './message-list.component';
import { MessageComponent } from './message.component';
import { MessageService } from './messages.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [],
    declarations: [
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
    ],
    providers: [
        MessageService
    ],
})
export class MessageModule { }
