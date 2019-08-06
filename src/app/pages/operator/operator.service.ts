import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  
  static readonly endpoint = 'http://class.onlinemoneypurse.com/API/';
  static readonly endpoint1 = 'http://localhost:57259/API/';
  
  static readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };

  constructor(private http: HttpClient) {
  }
  
  getOperators(): Observable<any> {
    return this.http.get(OperatorService.endpoint + 'DataEntryOperators').pipe(
      map(this.extractData));
  }
  getOperator(id): Observable<any> {
    return this.http.get(OperatorService.endpoint + 'DataEntryOperators/' + id).pipe(
      map(this.extractData));
  }
  
  addOperator (DataEntryOperatorBE): Observable<any> {
    console.log(DataEntryOperatorBE);
    return this.http.post<any>(OperatorService.endpoint + 'DataEntryOperators', JSON.stringify(DataEntryOperatorBE), OperatorService.httpOptions).pipe(
      tap((customer) => console.log(`added operator w/ id=${DataEntryOperatorBE.DataEntryOperatorID}`)),
      catchError(this.handleError<any>('addOperator'))
    );
  }
  
  updateOperator (DataEntryOperatorBE): Observable<any> {
    console.log(DataEntryOperatorBE);
    return this.http.post<any>(OperatorService.endpoint + 'DataEntryOperators', JSON.stringify(DataEntryOperatorBE), OperatorService.httpOptions).pipe(
      tap((customer) => console.log(`update operator w/ id=${DataEntryOperatorBE.DataEntryOperatorID}`)),
      catchError(this.handleError<any>('update'))
    );
  }
  
  deleteOperator (id): Observable<any> {
    return this.http.get(OperatorService.endpoint + 'DropOperator/' + id).pipe(
      map(this.extractData));   
  }


  private extractData(res: Response) {
    let body = res;
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
