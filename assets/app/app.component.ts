import { Component, OnInit } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    message: Message = {
        content: 'A message',
        username: 'ritwickdey'
    };


    constructor() { }

    ngOnInit() { }
}