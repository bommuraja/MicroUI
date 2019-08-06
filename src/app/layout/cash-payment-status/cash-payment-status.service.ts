import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CashPaymentStatusService {

  static readonly endpoint = 'http://service.onlinemoneypurse.com/API/';
  static readonly endpoint1 = 'http://localhost:50395/API/';

  static readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };

  constructor(private http: HttpClient) {
  }
  getCashPaymentStatuses(): Observable<any> {
    return this.http.get(CashPaymentStatusService.endpoint + 'CashPaymentStatus').pipe(
      map(this.extractData));
  }
  getCashPaymentStatus(id): Observable<any> {
    return this.http.get(CashPaymentStatusService.endpoint + 'CashPaymentStatus/' + id).pipe(
      map(this.extractData));
  }

  addCashPaymentStatus (CashPaymentStatusData): Observable<any> {
    console.log(CashPaymentStatusData);
    return this.http.post<any>(CashPaymentStatusService.endpoint + 'CashPaymentStatus', JSON.stringify(CashPaymentStatusData), CashPaymentStatusService.httpOptions).pipe(
      tap((cashpaymentstatus) => console.log(`added CashPaymentStatus w/ id=${CashPaymentStatusData.CashPaymentStatusID}`)),
      catchError(this.handleError<any>('addCashPaymentStatus'))
    );
  }

  updateCashPaymentStatus (CashPaymentStatusData): Observable<any> {
    console.log(CashPaymentStatusData);
    return this.http.post<any>(CashPaymentStatusService.endpoint + 'CashPaymentStatus', JSON.stringify(CashPaymentStatusData), CashPaymentStatusService.httpOptions).pipe(
      tap((cashpaymentstatus) => console.log(`updated CashPaymentStatus w/ id=${CashPaymentStatusData.CashPaymentStatusID}`)),
      catchError(this.handleError<any>('updateCashPaymentStatus'))
    );
  }

  deleteCashPaymentStatus (id): Observable<any> {
    return this.http.get(CashPaymentStatusService.endpoint + 'DropCashPaymentStatu/' + id).pipe(
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
