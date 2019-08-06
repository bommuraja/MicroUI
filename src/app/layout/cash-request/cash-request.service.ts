import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class CashRequestService {

  static readonly endpoint = 'http://service.onlinemoneypurse.com/API/';
  static readonly endpoint1 = 'http://localhost:50395/API/';

  static readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };

  constructor(private http: HttpClient) {
  }
  getCashRequests(): Observable<any> {
    return this.http.get(CashRequestService.endpoint + 'CashRequests').pipe(
      map(this.extractData));
  }
  getCashRequest(id): Observable<any> {
    return this.http.get(CashRequestService.endpoint + 'CashRequests/' + id).pipe(
      map(this.extractData));
  }

  getCashRequestByUserID (userAccountID): Observable<any> {
    return this.http.get(CashRequestService.endpoint + 'GetCashRequestByUserID/' + userAccountID).pipe(
      map(this.extractData));
  }

  addCashRequest (CashRequestData): Observable<any> {
    console.log(CashRequestData);
    return this.http.post<any>(CashRequestService.endpoint + 'CashRequests', JSON.stringify(CashRequestData), CashRequestService.httpOptions).pipe(
      tap((CashRequests) => console.log(`added CashRequests w/ id=${CashRequestData.CashRequestID}`)),
      catchError(this.handleError<any>('addCashRequests'))
    );
  }

  updateCashRequest (CashRequestData): Observable<any> {
    console.log(CashRequestData);
    return this.http.post<any>(CashRequestService.endpoint + 'CashRequests', JSON.stringify(CashRequestData), CashRequestService.httpOptions).pipe(
      tap((CashRequests) => console.log(`update CashRequests w/ id=${CashRequestData.CashRequestID}`)),
      catchError(this.handleError<any>('updateCashRequests'))
    );
  }

  deleteCashRequest (id): Observable<any> {
    return this.http.get(CashRequestService.endpoint + 'DropCashRequest/' + id).pipe(
      map(this.extractData));
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
