import { MessageService } from './messages.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';


@Component({
    selector: 'app-message',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.css']
})

export class MessageComponent implements OnInit {

    @Input() message: Message;

    constructor(private messageService: MessageService) { }

    ngOnInit() { }

    onEdit() {
        this.messageService.editMessage(this.message);
    }

    onDelete() {
        this.messageService.deleteMessage(this.message);
    }
}