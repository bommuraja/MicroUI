import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class CashRequestStatusService {

  static readonly endpoint = 'http://service.onlinemoneypurse.com/API/';
  static readonly endpoint1 = 'http://localhost:50395/API/';

  static readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };

  constructor(private http: HttpClient) {
  }
  getCashRequestStatuses(): Observable<any> {
    return this.http.get(CashRequestStatusService.endpoint + 'CashRequestStatus').pipe(
      map(this.extractData));
  }
  getCashRequestStatus(id): Observable<any> {
    return this.http.get(CashRequestStatusService.endpoint + 'CashRequestStatus/' + id).pipe(
      map(this.extractData));
  }

  addCashRequestStatus (CashRequestStatusData): Observable<any> {
    console.log(CashRequestStatusData);
    return this.http.post<any>(CashRequestStatusService.endpoint + 'CashRequestStatus', JSON.stringify(CashRequestStatusData), CashRequestStatusService.httpOptions).pipe(
      tap((CashRequestStatusData) => console.log(`added CashRequestStatusData w/ id=${CashRequestStatusData.CashRequestStatusID}`)),
      catchError(this.handleError<any>('addCashRequestStatusData'))
    );
  }

  updateCashRequestStatus (CashRequestStatusData): Observable<any> {
    console.log(CashRequestStatusData);
    return this.http.post<any>(CashRequestStatusService.endpoint + 'CashRequestStatus', JSON.stringify(CashRequestStatusData), CashRequestStatusService.httpOptions).pipe(
      tap((CashRequestStatusData) => console.log(`update CashRequestStatusData w/ id=${CashRequestStatusData.CashRequestStatusID}`)),
      catchError(this.handleError<any>('CashRequestStatusData'))
    );
  }

  deleteCashRequestStatus (id): Observable<any> {
    return this.http.get(CashRequestStatusService.endpoint + 'DropCashRequestStatus/' + id).pipe(
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
