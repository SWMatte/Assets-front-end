import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = 'http://localhost:8080/vlc2suite/rest/employee/';


  constructor(private http : HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Employee[]>(this.url, { headers });
  }
  
}
