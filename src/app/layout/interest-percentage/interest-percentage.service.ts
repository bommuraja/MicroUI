import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterestPercentageService {
  static readonly endpoint = 'http://service.onlinemoneypurse.com/API/';
  static readonly endpoint1 = 'http://localhost:50395/API/';

  static readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };

  constructor(private http: HttpClient) {
  }

  getInterestPercentages(): Observable<any> {
    return this.http.get(InterestPercentageService.endpoint + 'InterestPercentages').pipe(
      map(this.extractData));
  }
  getInterestPercentage(id): Observable<any> {
    return this.http.get(InterestPercentageService.endpoint + 'InterestPercentages/' + id).pipe(
      map(this.extractData));
  }

  addInterestPercentage (InterestPercentageData): Observable<any> {
    console.log(InterestPercentageData);
    return this.http.post<any>(InterestPercentageService.endpoint + 'InterestPercentages', JSON.stringify(InterestPercentageData), InterestPercentageService.httpOptions).pipe(
      tap((customer) => console.log(`added operator w/ id=${InterestPercentageData.InterestPercentageID}`)),
      catchError(this.handleError<any>('addOperator'))
    );
  }

  updateInterestPercentage (InterestPercentageData): Observable<any> {
    console.log(InterestPercentageData);
    return this.http.post<any>(InterestPercentageService.endpoint + 'InterestPercentages', JSON.stringify(InterestPercentageData), InterestPercentageService.httpOptions).pipe(
      tap((customer) => console.log(`update operator w/ id=${InterestPercentageData.InterestPercentageID}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  deleteInterestPercentage (id): Observable<any> {
    return this.http.get(InterestPercentageService.endpoint + 'DropInterestPercentage/' + id).pipe(
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
