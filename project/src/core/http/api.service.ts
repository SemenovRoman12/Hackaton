import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "./api-url.token";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL);

  public get<T>(url: string, params: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${url}`, {
      params,
    });
  }

  public post<T, D>(url: string, data?: D): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${url}`, JSON.stringify(data));
  }

  public put<T, D>(url: string, data?: D): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${url}`, JSON.stringify(data));
  }

  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${url}`);
  }
}
