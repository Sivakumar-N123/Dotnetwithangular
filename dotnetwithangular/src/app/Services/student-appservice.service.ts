import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { data, specData, userData } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StudentAppserviceService {

  email:any;

  putValue(value:any)
  {
    this.email=value;
  }
  setValue()
  {
    return this.email;
  }
  
  baseApiUrl:string = environment.baseApiUrl 
  //To get current login user
  private sessiondata = new BehaviorSubject<any>(sessionStorage.getItem("currentuser.studentname")) 

  constructor(private http: HttpClient,private router:Router) { }

  
  // For course controller
  getAllCourses(): Observable<data[]>{
    return this.http.get<data[]>(this.baseApiUrl+'/api/Course');
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
  getuserbyemail(name:any){
    return this.http.get(this.baseApiUrl+"/api/User/"+name).pipe(map(user=>{sessionStorage.setItem("currentuser",JSON.stringify(user))
    return user}));
  }

  addUser(data:userData): Observable<userData>{
    return this.http.post<userData>(this.baseApiUrl+'/api/user/',data);
  }

  updateUser(id:any,data:userData): Observable<userData>{
    return this.http.put<userData>(this.baseApiUrl+'/api/user/'+id,data);
  }

  deleteUser(id:any,data:userData):Observable<userData>{
    return this.http.put<userData>(this.baseApiUrl+'/api/user/'+id,data);
  }

 
 
 
  // For specification controller
  getAllSpecification(): Observable<specData[]>{
    return this.http.get<specData[]>(this.baseApiUrl+'/api/specification');
  }
  updateSpecification(id:any,updatedata:specData):Observable<specData>{
    return this.http.put<specData>(this.baseApiUrl + '/api/specification/'+id,updatedata);
  }

  addSpecification(addSpecificationRequest:specData): Observable<specData>{
    return this.http.post<specData> (this.baseApiUrl+ '/api/specification',addSpecificationRequest);
  }

  deleteSpecification(id:any):Observable<specData>{
   return this.http.delete<specData>(this.baseApiUrl + '/api/specification/' + id);
  }

  
  
  
  //For speccourse cotroller
  addspecCourse(data:any): Observable<any>{
    return this.http.post<any>(this.baseApiUrl+'/api/SpecCourse',data);
  }

  getAllSpecCourse(): Observable<any>{
    return this.http.get<any>(this.baseApiUrl+'/api/SpecCourse');
  }

  getSpecCourseByCourseName(name:any): Observable<any>{
    return this.http.get<any>(this.baseApiUrl+'/api/SpecCourse/'+name);
  }
  updateSpecCourses(id:any,updatedata:any):Observable<any>{
    return this.http.put<any>(this.baseApiUrl + '/api/SpecCourse/'+id,updatedata);
  }

  deleteSpecCourse(id:any):Observable<any>{
    return this.http.delete<any>(this.baseApiUrl + '/api/SpecCourse/' + id);
  }




  //For usercourse controller

  GetUserCourseDet(): Observable<data[]>{
    return this.http.get<data[]>(this.baseApiUrl+'/api/UserCourseDet');
  }

  GetUserCourseDetByName(name:any): Observable<any>{
    return this.http.get<any>(this.baseApiUrl+'/api/UserCourseDet/'+name);
  }

  PutUserCourseDet(addSpecificationRequest:any){
    return this.http.post(this.baseApiUrl+ '/api/UserCourseDet',addSpecificationRequest);
  }

  UpdateUserCourse(id:any,updatedata:any):Observable<any>{
    return this.http.put<any>(this.baseApiUrl + '/api/UserCourseDet/'+id,updatedata);
  }

  deleteUserCourse(id:any):Observable<any>{
    return this.http.delete<any>(this.baseApiUrl + '/api/UserCourseDet/' + id);
  }
  get currentuser()
  {
    return this.sessiondata.asObservable();
  }
  logout()
  {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
