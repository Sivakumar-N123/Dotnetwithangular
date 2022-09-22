import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { data, userData } from '../model';


@Injectable({
  providedIn: 'root'
})
export class StudentAppserviceService {
  
  baseApiUrl:string = environment.baseApiUrl 

  constructor(private http: HttpClient) { }

  // For course controller
  getAllCourses(): Observable<data[]>{
    return this.http.get<data[]>(this.baseApiUrl+"/api/Course");
  }
  updateCourse(id:string):Observable<data>{
    return this.http.get<data>(this.baseApiUrl + '/api/course' + id);

  }
  addCourse(addCourseRequest:data): Observable<data>{
    return this.http.post<data> (this.baseApiUrl+ 'api/course',
    addCourseRequest);
  }

  getCourse(id:string):Observable<data>{
    return this.http.get<data>(this.baseApiUrl+ 'api/course' + id);
  }

  deleteCourse(id:string):Observable<data>{
   return this.http.delete<data>(this.baseApiUrl + '/api/course/' + id);

  }

  // For user controller
  getAllusers(): Observable<userData>{
    return this.http.get<userData>(this.baseApiUrl+"/api/User");
  }


  addUser(data:userData){
    return this.http.post<userData>(this.baseApiUrl+"/api/User",data);
  }

  // For specification controller

}
