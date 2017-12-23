import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { User } from './user.model';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    signup(user: User) {
        return this.http.post('/user', user, { observe: 'response' })
            .map((response: HttpResponse<any>) => response.body)
            .catch((err: HttpErrorResponse) => Observable.throw(err));
    }

    signin(user: User) {
        return this.http.post('/user/signin', user, { observe: 'response' })
            .map((response: HttpResponse<any>) => response.body)
            .catch((err: HttpErrorResponse) => Observable.throw(err));
    }

}