import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-messages',
    template: `
        <div class="row">
            <app-mesage-input></app-mesage-input>
            <hr>
        </div>
        <div class="row">
            <app-message-list></app-message-list>
        </div>
    `
})

export class MessagesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}