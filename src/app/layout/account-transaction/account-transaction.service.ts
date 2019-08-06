import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AccountTransactionService {

  static readonly endpoint = 'http://service.onlinemoneypurse.com/API/';
  static readonly endpoint1 = 'http://localhost:50395/API/';

  static readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };

  constructor(private http: HttpClient) {
  }

  getAccountTransactions(): Observable<any> {
    return this.http.get(AccountTransactionService.endpoint + 'AccountTransactions').pipe(
      map(this.extractData));
  }
  getAccountTransaction(id): Observable<any> {
    return this.http.get(AccountTransactionService.endpoint + 'AccountTransactions/' + id).pipe(
      map(this.extractData));
  }

  addAccountTransaction (AccountTransactionData): Observable<any> {
    console.log(AccountTransactionData);
    return this.http.post<any>(AccountTransactionService.endpoint + 'AccountTransactions', JSON.stringify(AccountTransactionData), AccountTransactionService.httpOptions).pipe(
      tap((customer) => console.log(`added accounttransaction w/ id=${AccountTransactionData.AccountTransactionID}`)),
      catchError(this.handleError<any>('addaccounttransaction'))
    );
  }

  updateAccountTransaction (AccountTransactionData): Observable<any> {
    console.log(AccountTransactionData);
    return this.http.post<any>(AccountTransactionService.endpoint + 'AccountTransactions', JSON.stringify(AccountTransactionData), AccountTransactionService.httpOptions).pipe(
      tap((customer) => console.log(`update accounttransaction w/ id=${AccountTransactionData.AccountTransactionID}`)),
      catchError(this.handleError<any>('updateaccounttransaction'))
    );
  }

  deleteAccountTransaction (id): Observable<any> {
    return this.http.get(AccountTransactionService.endpoint + 'DropAccountTransaction/' + id).pipe(
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
