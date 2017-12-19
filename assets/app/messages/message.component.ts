import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.css']
})

export class MessageComponent implements OnInit {

    message = {
        content: 'A message',
        author: 'ritwick'
    };

    constructor() { }


    ngOnInit() { }
}