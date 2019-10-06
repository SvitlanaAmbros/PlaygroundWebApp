import { Injectable } from '@angular/core';
import { HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {_throw} from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';

export const BASE_URL = 'https://pmdv74i924.execute-api.eu-west-1.amazonaws.com/prod/v1';

@Injectable()
export class BaseHttpInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newUrl = '';
        request.url.startsWith('/') ? newUrl = BASE_URL + request.url : newUrl = request.url;
        const newRequest = request.clone({
            url: newUrl
        });

        return next.handle(newRequest).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    // server-side error
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }

                return _throw(errorMessage);
            })
        );
    }
}
