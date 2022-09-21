import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { data } from '../model';


@Injectable({
  providedIn: 'root'
})
export class StudentAppserviceService {
  
  baseApiUrl = 'https://localhost:7250/api/course'; 

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<data[]>{
    return this.http.get<data[]>(this.baseApiUrl);
  }
}
