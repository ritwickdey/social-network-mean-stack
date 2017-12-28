import { MessageService } from './messages.service';
import { Message } from './message.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-message-list',
    templateUrl: 'message-list.component.html',
    styleUrls: ['message-list.component.css']
})

export class MessageListComponent implements OnInit {

    messages: Message[] = [];

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.messageService.getMessage()
            .subscribe(messages => this.messages = messages);
    }

}