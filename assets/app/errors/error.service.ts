import { MyError } from './error.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ErrorService {
    errorOccured = new EventEmitter<MyError>();
    constructor() { }

    handleError(err) {
        this.errorOccured.emit(new MyError(
            err.title || 'Error',
            err.error.message || 'Something Went Wrong!'
        ));
    }
}