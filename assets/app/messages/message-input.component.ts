import { Message } from './message.model';
import { MessageService } from './messages.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-mesage-input',
    templateUrl: 'message-input.component.html'
})

export class MessageInputComponent implements OnInit {
    constructor(private messageService: MessageService) { }

    ngOnInit() { }

    onSubmit(form: NgForm) {
        const message: Message = {
            content: form.value.content ? form.value.content.trim() : null,
            username: 'Ritwick'
        };
        if (!message.content) return;
        this.messageService.addMessage(message);
        console.log(message);
        form.resetForm();
    }

    onKeyDown(event, form) {
        if (event.keyCode === 13)
            this.onSubmit(form);
    }

}