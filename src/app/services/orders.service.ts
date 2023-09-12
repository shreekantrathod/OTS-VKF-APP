import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrl: string = environment.appBaseUrl;
  constructor(private httpClient: HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  getNewOrder(request: any) {
    let API_URL = `${this.apiUrl}/order/getOrderByDistributorIdAndSubOrderStatus`;
    return this.httpClient.post(API_URL, request).pipe(catchError(this.error));
  }
  getAcceptOrder(request: any) {
    let API_URL = `${this.apiUrl}order/getOrderByDistributorIdAndSubOrderStatus`;
    return this.httpClient.post(API_URL, request).pipe(catchError(this.error));
  }
  
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
