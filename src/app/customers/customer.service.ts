import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from 'rxjs/operators'

import { Icustomer } from "./customer";

@Injectable({
    providedIn: 'root'
})

export class customerService{

    private customerUrl = 'api/customers/customers.json';

    constructor (private http : HttpClient) {}

    getcustomers(): Observable<Icustomer[]>{
        //in a real world app here we should add the API endPoint to call to retrive the data
        return this.http.get<Icustomer[]>(this.customerUrl).pipe(
            //tap(data => console.log('All: '+ JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        //in a real world app, we may send to some remote loggin infrastructure
        //instead of just loggin it ro the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            //A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }else{
            // The backend return an usuccessful response code.
            //The response code may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);

    }


}