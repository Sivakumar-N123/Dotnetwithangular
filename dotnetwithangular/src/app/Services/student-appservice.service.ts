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
  updateCourse(id:string,updatedata:data):Observable<data>{
    return this.http.put<data>(this.baseApiUrl + '/api/course/' + id,updatedata);

  }
  addCourse(addCourseRequest:data): Observable<data>{
    return this.http.post<data> (this.baseApiUrl+ 'api/course', addCourseRequest);
  }

  deleteCourse(id:string):Observable<data>{
   return this.http.delete<data>(this.baseApiUrl + '/api/course/' + id);

  }

  // For user controller
  getAllusers(): Observable<userData>{
    return this.http.get<userData>(this.baseApiUrl+"/api/User");
  }


  addUser(data:userData): Observable<userData>{
    return this.http.post<userData>(this.baseApiUrl+"/api/User",data);
  }

  updateUser(id:any,data:userData): Observable<userData>{
    return this.http.put<userData>(this.baseApiUrl+"/api/User/"+id,data);
  }

  // For specification controller

}
