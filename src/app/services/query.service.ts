import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  public domain: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public get(subdirectory: string, id?: string): Observable<any> {
    return this.http.get<any>(this.domain + subdirectory + (id ? `/${id}` : ''));
  }

  public post(subdirectory: string, queryParams: { [key: string]: any }): Observable<any> {
    return this.http.post<any>(this.domain + subdirectory, queryParams);
  }

  public put(subdirectory: string, id: number, queryParams: { [key: string]: any }): Observable<any> {
    return this.http.put(`${this.domain}${subdirectory}/${id}`, queryParams);
  }
}
