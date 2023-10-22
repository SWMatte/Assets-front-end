import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asset } from '../models/Asset';
import { Observable } from 'rxjs';
import { AssetDTO } from '../models/AssetDTO';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  url: string = 'http://localhost:8080/vlc2suite/rest/asset';

  constructor(private http: HttpClient) {}
 
  addAsset(body: AssetDTO): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

  
    return this.http.post<any>(this.url, body, { headers });
  }
}
