import { ErrorService } from './error.service';
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

    constructor(private errorService: ErrorService) { }

    ngOnInit() {
        this.errorService.errorOccured.subscribe(
            (error: MyError) => {
                this.error = error;
                this.display = 'block';
            }
        );
    }

    onErrorHandled() {
        this.display = 'none';
    }
}