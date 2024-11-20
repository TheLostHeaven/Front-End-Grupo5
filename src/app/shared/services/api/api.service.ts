import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpStatusCode, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiConfig } from "@shared/services/api/api.config";
import { SessionProviderservice } from '../auth/session-provider.service';

@Injectable()
export class ApiService {
  public reqHeader: any;
  constructor(
    private http: HttpClient,
    private readonly sessionProvider: SessionProviderservice
  ) {
    this.reqHeader = new HttpHeaders({
      'Content-Type': ApiConfig.contentType,
      Authorization: `${ApiConfig.carry} ${this.sessionProvider.getInformationToken()}`,
    });
  }

  public get(url: string, params?: HttpParams): Observable<any> {
    return this.http
      .get<any>(`${url}`, { headers: this.reqHeader, params })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.errorHandler(error);
        }),
        map((response: any) => response)
      );
  }

  public post(url: string, data: any, params?: HttpParams): Observable<any> {
    return this.http
      .post<any>(`${url}`, data, { headers: this.reqHeader, params })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.errorHandler(error);
        }),
        map((response: any) => response)
      );
  }

  public put(url: string, data: any): Observable<any> {
    return this.http.put<any>(`${url}`, data, { headers: this.reqHeader }).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorHandler(error);
      }),
      map((response: any) => response)
    );
  }

  public patch(url: string, data: any): Observable<any> {
    return this.http.patch<any>(`${url}`, data, { headers: this.reqHeader }).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorHandler(error);
      }),
      map((response: any) => response)
    );
  }

  public delete(url: string, params?: HttpParams): Observable<any> {
    return this.http
      .delete<any>(`${url}`, { headers: this.reqHeader, params })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.errorHandler(error);
        }),
        map((response: any) => response)
      );
  }

  private errorHandler(error: HttpErrorResponse) {
    switch (error.status) {
      case HttpStatusCode.BadRequest:
        return throwError(() => new HttpErrorResponse({error}));
      case HttpStatusCode.InternalServerError:
        return throwError(() => new Error(ApiConfig.internalServerError));
      case HttpStatusCode.NotFound:
        return throwError(() => new Error(ApiConfig.NotFound));
      case HttpStatusCode.Unauthorized:
        return throwError(() => new Error(ApiConfig.Unauthorized));
      default:
        return throwError(() => new Error(ApiConfig.unknownError));
    }
  }
}
