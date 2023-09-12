import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  apiUrl: string = environment.appBaseUrl;
  constructor(private httpClient: HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  sendNotifcation(request: any) {
    let API_URL = `${this.apiUrl}/notification/add_notification.php`;
    return this.httpClient.post(API_URL, request).pipe(catchError(this.error));
  }
  
  getNotificationByDate(request: any) {
    let API_URL = `${this.apiUrl}/notification_status/get_notification_statusReport.php`;
    return this.httpClient.post(API_URL, request).pipe(catchError(this.error));
  }
  getAllNotificationById(request: any) {
    let API_URL = `${this.apiUrl}/notification/read_notification.php`;
    return this.httpClient.post(API_URL,request).pipe(catchError(this.error));
  }
  getNotificationByUserId(request: any) {
    let API_URL = `${this.apiUrl}/notification_status/getNotificationByUserID.php`;
    return this.httpClient.post(API_URL, request).pipe(catchError(this.error));
  }
  getNotificationStatusDetailsByUserId(request: any) {
    let API_URL = `${this.apiUrl}/notification_status/getNotificationByUserID.php`;
    return this.httpClient.post(API_URL, request).pipe(catchError(this.error));
  }
  respondNotification(request: any) {
    let API_URL = `${this.apiUrl}/notification/respondNotification.php`;
    return this.httpClient.post(API_URL, request).pipe(catchError(this.error));
  }
  getUserReportByStatus(request: any) {
    let API_URL = `${this.apiUrl}/notification_status/getUserReportByStatus.php`;
    return this.httpClient.post(API_URL,request).pipe(catchError(this.error));
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
