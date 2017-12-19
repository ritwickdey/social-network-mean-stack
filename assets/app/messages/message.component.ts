import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';
import { Input } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.css']
})

export class MessageComponent implements OnInit {

    @Input() message: Message;

    constructor() { }


    ngOnInit() { }
}