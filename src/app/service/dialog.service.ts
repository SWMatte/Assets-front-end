import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  
  private dialogCloseSubject = new Subject<void>();

  

  constructor() { }

  closeDialog() {
    this.dialogCloseSubject.next();
  }

  onDialogClose() {
    return this.dialogCloseSubject.asObservable();
  }





}
