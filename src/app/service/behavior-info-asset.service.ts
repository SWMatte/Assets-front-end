import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorInfoAssetService {
  private infoAssetSubject = new BehaviorSubject<any>(null);

  infoAsset$ = this.infoAssetSubject.asObservable();
  
  updateInfoAsset(value: any) {
    this.infoAssetSubject.next(value);
  }
  constructor() { }
}
