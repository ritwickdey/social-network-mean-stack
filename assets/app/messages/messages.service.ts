import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Message } from './message.model';


import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable()
export class MessageService {
    messageIsEdit = new EventEmitter<Message>();

    private messages: Message[] = [];
    constructor(private http: HttpClient) { }

    addMessage(message: Message) {
        this.messages.push(message);
        return this.http
            .post('/message' + this.getTokenQuery(), message, { observe: 'response' })
            .map((response: HttpResponse<any>) => {
                message.messageId = response.body.obj._id;
                // console.log(message);
                return response.body;
            })
            .catch((err: HttpErrorResponse) => {
                this.messages.splice(this.messages.indexOf(message), 1);
                return Observable.throw(err);
            });
    }

    getMessage() {
        return this.http.get('/message' + this.getTokenQuery(), { observe: 'response' })
            .map((response: HttpResponse<any>) => {
                this.messages = response.body.obj
                    .map(message =>
                        new Message(message.content, 'fake User', message._id, null)
                    );
                return this.messages;
            })
            .catch((err: HttpErrorResponse) => Observable.throw(err));
    }

    deleteMessage(message: Message) {
        const msgIndex = this.messages.indexOf(message);
        this.messages.splice(msgIndex, 1);

        return this.http
            .delete('/message/' + message.messageId + this.getTokenQuery(), { observe: 'response' })
            .map((response: HttpResponse<any>) => response.body)
            .catch((err: HttpErrorResponse) => {
                this.messages.splice(msgIndex, 0, message);
                return Observable.throw(err);
            });

    }

    updateMessage(message: Message) {
        return this.http
            .patch('/message/' + message.messageId, message, { observe: 'response' })
            .map((response: HttpResponse<any>) => response.body)
            .catch((err: HttpErrorResponse) => Observable.throw(err));

    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    private getTokenQuery() {
        const token = localStorage.getItem('token');
        return token ? '?token=' + token : '';
    }
}