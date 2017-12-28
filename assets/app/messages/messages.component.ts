import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-messages',
    template: `
        <div>
            <app-mesage-input></app-mesage-input>
            <hr>
            <app-message-list></app-message-list>
        </div>
    `
})

export class MessagesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}