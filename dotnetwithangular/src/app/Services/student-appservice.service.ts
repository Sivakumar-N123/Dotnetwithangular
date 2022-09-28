import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { data, specData, userData } from '../model';


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
    return this.http.post<data> (this.baseApiUrl+ '/api/course',addCourseRequest);
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

  deleteUser(id:string,data:userData):Observable<userData>{
    return this.http.put<userData>(this.baseApiUrl + '/api/user/'+ id,data);
   }

  // For specification controller
  getAllSpecification(): Observable<specData[]>{
    return this.http.get<specData[]>(this.baseApiUrl+"/api/specification");
  }
  updateSpecification(id:string,updatedata:specData):Observable<specData>{
    return this.http.put<specData>(this.baseApiUrl + '/api/specification/' + id,updatedata);
  }

  addSpecification(addSpecificationRequest:specData): Observable<specData>{
    return this.http.post<specData> (this.baseApiUrl+ '/api/specification',addSpecificationRequest);
  }

  deleteSpecification(id:string):Observable<specData>{
   return this.http.delete<specData>(this.baseApiUrl + '/api/specification/' + id);

  }
  
  
  //For SpecCourse Controller
  
  getAllCourse(): Observable<data[]>{
    return this.http.get<data[]>(this.baseApiUrl+"/api/speccourse");
  }

}
