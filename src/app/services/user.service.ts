import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = environment.appBaseUrl;
  constructor(private httpClient: HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  userLogin(request: any) {
    let API_URL = `${this.apiUrl}/users/otsLoginAuthentication`;
    return this.httpClient.post(API_URL, request).pipe(catchError(this.error));
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      alert("Invalid Credentials");
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
