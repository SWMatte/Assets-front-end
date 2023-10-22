import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { AuthenticationUser } from '../models/AuthenticationUser';
import { ResponseAuthentication } from '../models/ResponseAuthentication';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = "http://localhost:8080/vlc2suite/rest/auth/login";

  constructor(private http : HttpClient) { }

  loginCredential(body: AuthenticationUser): Observable<ResponseAuthentication> {
    const headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.post<ResponseAuthentication>(this.url, body, { headers });
  }
}
