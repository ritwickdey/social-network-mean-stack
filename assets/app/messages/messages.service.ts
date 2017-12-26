import { ErrorService } from './../errors/error.service';
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
    constructor(private http: HttpClient, private errorService: ErrorService) { }

    addMessage(message: Message) {
        return this.http
        .post('/message' + this.getTokenQuery(), message, { observe: 'response' })
        .map((response: HttpResponse<any>) => response.body.obj)
        .map(data => {
                const msg = new Message(
                    data.content,
                    data.user.firstName,
                    data._id,
                    data.user._id
                );
                console.log(msg);
                this.messages.push(msg);
                return data;
            })
            .catch((err: HttpErrorResponse) => {
                this.errorService.handleError(err.error);
                return Observable.throw(err);
            });
    }

    getMessage() {
        return this.http.get('/message' + this.getTokenQuery(), { observe: 'response' })
            .map((response: HttpResponse<any>) => {
                this.messages = response.body.obj
                    .map(message =>
                        new Message(
                            message.content,
                            message.user.firstName,
                            message._id,
                            message.user._id
                        )
                    );
                return this.messages;
            })
            .catch((err: HttpErrorResponse) => {
                this.errorService.handleError(err.error);
                return Observable.throw(err);
            });
    }

    deleteMessage(message: Message) {
        const msgIndex = this.messages.indexOf(message);
        this.messages.splice(msgIndex, 1);

        return this.http
            .delete('/message/' + message.messageId + this.getTokenQuery(), { observe: 'response' })
            .map((response: HttpResponse<any>) => response.body)
            .catch((err: HttpErrorResponse) => {
                this.messages.splice(msgIndex, 0, message);
                this.errorService.handleError(err.error);
                return Observable.throw(err);
            });

    }

    updateMessage(message: Message) {
        return this.http
            .patch('/message/' + message.messageId + this.getTokenQuery(), message, { observe: 'response' })
            .map((response: HttpResponse<any>) => response.body)
            .catch((err: HttpErrorResponse) => {
                this.errorService.handleError(err.error);
                return Observable.throw(err);
            });

    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    private getTokenQuery() {
        const token = localStorage.getItem('token');
        return token ? '?token=' + token : '';
    }
}