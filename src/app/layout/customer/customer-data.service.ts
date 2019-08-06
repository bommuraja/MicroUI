import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
// test

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  static readonly endpoint = 'http://class.onlinemoneypurse.com/API/';
  static readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<any> {
    return this.http.get(CustomerDataService.endpoint + 'DataEntryOperators').pipe(
      map(this.extractData));
  }
  getCustomer(id): Observable<any> {
    return this.http.get(CustomerDataService.endpoint + 'customers/' + id).pipe(
      map(this.extractData));
  }

  addCustomer (customer): Observable<any> {
    console.log(customer);
    return this.http.post<any>(CustomerDataService.endpoint + 'customers', JSON.stringify(customer), CustomerDataService.httpOptions).pipe(
      tap((customer) => console.log(`added customer w/ id=${customer.id}`)),
      catchError(this.handleError<any>('addCustomer'))
    );
  }

  updateCustomer (id, customer): Observable<any> {
    return this.http.put(CustomerDataService.endpoint + 'customers/' + id, JSON.stringify(customer), CustomerDataService.httpOptions).pipe(
      tap(_ => console.log(`updated customer id=${id}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  deleteCustomer (id): Observable<any> {
    return this.http.delete<any>(CustomerDataService.endpoint + 'customers/' + id, CustomerDataService.httpOptions).pipe(
      tap(_ => console.log(`deleted customer id=${id}`)),
      catchError(this.handleError<any>('deleteCustomer'))
    );
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
