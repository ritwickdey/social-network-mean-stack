import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, MessageComponent, MessageListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
