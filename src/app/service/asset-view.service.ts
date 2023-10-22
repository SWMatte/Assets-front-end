import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetViewHistorySearch } from '../models/AssetViewHistorySearch';
import { AssetView } from '../models/AssetView';

@Injectable({
  providedIn: 'root'
})
export class AssetViewService {
  url: string = 'http://localhost:8080/vlc2suite/rest/assetView';

  constructor(private http: HttpClient) {}

  findAllData(body: AssetViewHistorySearch) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<AssetView>(this.url, body, { headers });
  }




 

  
   
  
}
