import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { localhostUri } from '../../constants';
import { text } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  constructor() { }
  private httpClient = inject(HttpClient);

  userLogin(username: string, password: string): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ username, password })
    var result = this.httpClient.post<string>(`${localhostUri}/User/Login`, body,  {headers : headers, responseType: 'text' as 'json'} );
    return result;
  }
}
