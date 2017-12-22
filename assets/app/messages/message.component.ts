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
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService) { }

    ngOnInit() { }

    onEdit() {
        this.editClicked.emit('Edit');
    }

    onDelete() {
        this.messageService.deleteMessage(this.message);
    }
}