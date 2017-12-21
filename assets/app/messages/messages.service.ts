import { Message } from './message.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

    private messages: Message[] = [];
    constructor() { }

    addMessage(message: Message) {
        this.messages.push(message);
        console.log(message, '-Service');
    }

    getMessage(): Message[] {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}