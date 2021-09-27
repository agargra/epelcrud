import { Injectable } from '@angular/core';
import { Mongotest } from './Mongotest';
import { Mysqltest } from './Mysqltest';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:3000/api';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

	// ****** MONGO API
	//READ
  GetMongotests() {
    let API_URL = `${this.REST_API}/mongo/`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res.data || {}
        }),
        catchError(this.handleError)
      )		
		
  }
  GetMongotest(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/mongo/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res.data || {}
        }),
        catchError(this.handleError)
      )
  }
	//CREATE
  AddMongotest(data: Mongotest): Observable<any> {
    let API_URL = `${this.REST_API}/mongo/create`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  //UPDATE
  updateMongotest(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/mongo/update/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  //DELETE
  deleteMongotest(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/mongo/delete/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }


	// ****** MYSQL API
	//READ
  GetMysqltests() {
    let API_URL = `${this.REST_API}/mysql/`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res.data || {}
        }),
        catchError(this.handleError)
      )		
		
  }
  GetMysqltest(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/mysql/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res.data || {}
        }),
        catchError(this.handleError)
      )
  }
	//CREATE
  AddMysqltest(data: Mysqltest): Observable<any> {
    let API_URL = `${this.REST_API}/mysql/create`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  //UPDATE
  updateMysqltest(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/mysql/update/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  //DELETE
  deleteMysqltest(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/mysql/delete/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }

	
}