import { Message } from './message.model';
import { MessageService } from './messages.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-mesage-input',
    templateUrl: 'message-input.component.html'
})

export class MessageInputComponent implements OnInit {

    message: Message;

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.messageService.messageIsEdit
            .subscribe((message: Message) => {
                console.log(this.message, message);
                this.message = message;
            });
    }

    onSubmit(form: NgForm) {

        if (this.message) {
            this.message.content = form.value.content ?
                form.value.content.trim() : this.message.content;

            this.messageService.updateMessage(this.message)
            .subscribe(
                res => console.log(res)
            );
            this.message = null;
        }
        else {
            const message: Message = {
                content: form.value.content ? form.value.content.trim() : null,
                username: 'unknown'
            };
            if (!message.content) return;

            this.messageService.addMessage(message)
                .subscribe(
                data => console.log(data),
                error => console.log(error)
                );

            console.log(message);
        }
        form.resetForm();
    }

    onKeyDown(event, form) {
        if (event.keyCode === 13)
            this.onSubmit(form);
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

}