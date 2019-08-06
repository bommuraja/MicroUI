import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FinancialInstitutionService {

  static readonly endpoint = 'http://service.onlinemoneypurse.com/API/';
  static readonly endpoint1 = 'http://localhost:50395/API/';

  static readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };

  constructor(private http: HttpClient) {
  }

  getFinancialInstitutions(): Observable<any> {
    return this.http.get(FinancialInstitutionService.endpoint + 'FinancialInstitutions').pipe(
      map(this.extractData));
  }
  getFinancialInstitution(id): Observable<any> {
    return this.http.get(FinancialInstitutionService.endpoint + 'FinancialInstitutions/' + id).pipe(
      map(this.extractData));
  }

  addFinancialInstitution (FinancialInstitutionData): Observable<any> {
    console.log(FinancialInstitutionData);
    return this.http.post<any>(FinancialInstitutionService.endpoint + 'FinancialInstitutions', JSON.stringify(FinancialInstitutionData), FinancialInstitutionService.httpOptions).pipe(
      tap((financialinstitution) => console.log(`added FinancialInstitution w/ id=${FinancialInstitutionData.FinancialInstitutionID}`)),
      catchError(this.handleError<any>('addFinancialInstitution'))
    );
  }

  updateFinancialInstitution (FinancialInstitutionData): Observable<any> {
    console.log(FinancialInstitutionData);
    return this.http.post<any>(FinancialInstitutionService.endpoint + 'FinancialInstitutions', JSON.stringify(FinancialInstitutionData), FinancialInstitutionService.httpOptions).pipe(
      tap((financialinstitution) => console.log(`update FinancialInstitution w/ id=${FinancialInstitutionData.FinancialInstitutionID}`)),
      catchError(this.handleError<any>('updateFinancialInstitution'))
    );
  }

  deleteFinancialInstitution (id): Observable<any> {
    return this.http.get(FinancialInstitutionService.endpoint + 'DropFinancialInstitution/' + id).pipe(
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
