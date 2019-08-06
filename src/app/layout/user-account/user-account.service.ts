import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  static readonly endpoint1 = 'http://service.onlinemoneypurse.com/API/';
  static readonly endpoint = 'http://localhost:50395/API/';

  static readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };

  constructor(private http: HttpClient) {
  }

  getUserAccounts(): Observable<any> {
    return this.http.get(UserAccountService.endpoint + 'UserAccounts').pipe(
      map(this.extractData));
  }
  getUserAccount(id): Observable<any> {
    return this.http.get(UserAccountService.endpoint + 'UserAccounts/' + id).pipe(
      map(this.extractData));
  }
  
  addUserAccount (UserAccountData): Observable<any> {
    console.log(UserAccountData);
    return this.http.post<any>(UserAccountService.endpoint + 'UserAccounts', JSON.stringify(UserAccountData), UserAccountService.httpOptions).pipe(
      tap((customer) => console.log(`added user account w/ id=${UserAccountData.UserAccountID}`)),
      catchError(this.handleError<any>('addUserAccount'))
    );
  }

  updateUserAccount (UserAccountData): Observable<any> {
    console.log(UserAccountData);
    return this.http.post<any>(UserAccountService.endpoint + 'UserAccounts', JSON.stringify(UserAccountData), UserAccountService.httpOptions).pipe(
      tap((customer) => console.log(`update user account w/ id=${UserAccountData.UserAccountID}`)),
      catchError(this.handleError<any>('update'))
    );
  }
  
  deleteUserAccount (id): Observable<any> {
    return this.http.get(UserAccountService.endpoint + 'DropUserAccount/' + id).pipe(
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
