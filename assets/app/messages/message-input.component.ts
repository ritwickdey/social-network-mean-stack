import { Message } from './message.model';
import { MessageService } from './messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mesage-input',
    templateUrl: 'message-input.component.html'
})

export class MessageInputComponent implements OnInit {
    constructor(private messageService: MessageService) { }

    ngOnInit() { }

    onSave(val: string) {
        const message: Message = {
            content: val,
            username: 'Ritwick'
        };
        this.messageService.addMessage(message);
        console.log(val);
    }

}