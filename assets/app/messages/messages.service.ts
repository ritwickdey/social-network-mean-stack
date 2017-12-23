import { Message } from './message.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class MessageService {

    private messages: Message[] = [];
    constructor(private http: HttpClient) { }

    addMessage(message: Message) {
        this.messages.push(message);
        return this.http
            .post('/message', message, { observe: 'response' })
            .map((response: HttpResponse<any>) => response.body)
            .catch((err: HttpErrorResponse) => Observable.throw(err.message));
    }

    getMessage(): Message[] {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}