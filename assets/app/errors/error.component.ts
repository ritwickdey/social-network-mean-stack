import { MyError } from './error.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: 'error.component.html',
    styleUrls: ['error.component.css']
})

export class ErrorComponent implements OnInit {

    error: MyError;
    display = 'none';

    constructor() { }

    ngOnInit() { }

    onErrorHandled() {
        this.display = 'none';
    }
}