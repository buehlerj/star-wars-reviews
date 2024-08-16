import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  public domain: string = 'https://swlibapi.jeffapotamous.com/';

  constructor(private http: HttpClient) {}

  public get(path: string, id?: string): Observable<any> {
    return this.http.get<any>(`${this.domain}${path}` + (id ? `/${id}` : ''));
  }

  public post(
    path: string,
    queryParams: { [key: string]: any }
  ): Observable<any> {
    return this.http.post<any>(`${this.domain}${path}`, queryParams);
  }

  public put(
    path: string,
    queryParams: { [key: string]: any }
  ): Observable<any> {
    return this.http.put(`${this.domain}${path}`, queryParams);
  }

  public putWithID(
    path: string,
    id: number,
    queryParams: { [key: string]: any }
  ): Observable<any> {
    return this.http.put(`${this.domain}${path}/${id}`, queryParams);
  }

  public delete(path: string, id: number): Observable<any> {
    return this.http.delete(`${this.domain}${path}/${id}`);
  }
}
