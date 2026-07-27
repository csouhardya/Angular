import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class DemoService1Service {
  http= inject(HttpClient);

  bvSubject = new BehaviorSubject<string>('initial');
  subject = new Subject<string>();


  getDemo(): Observable<Employee[]>{
    return this.http.get<Employee[]>('api/getEmployees/');
  }

  postDemo(emp: Employee) : Observable<void> {
    var headers = new HttpHeaders({'x-source': 'tenant1'});
    return this.http.post<void>('api/local', emp, { headers })
  }



  createSubject() {

  }

}
