import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mesage-input',
    templateUrl: 'message-input.component.html'
})

export class MessageInputComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onSave(val: string) {
        console.log(val);
    }

}