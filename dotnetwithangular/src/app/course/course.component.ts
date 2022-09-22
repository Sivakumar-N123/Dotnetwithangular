import { Component, OnInit } from '@angular/core';
 import { FormGroup,FormControl, Validators } from '@angular/forms';
import { data } from '../model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentAppserviceService } from '../Services/student-appservice.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})



export class CourseComponent implements OnInit {


  editable:boolean=false;
  updateid: any;
  allCourses: any;
   
  baseApiUrl:string = environment.baseApiUrl;


  data: data | undefined;

   loginForm=new FormGroup({
    id : new FormControl(''),
    user :new FormControl('',[Validators.required]),
   })
 
   loginUser(){
    console.warn(this.loginForm.value)
   }
   get user(){
    return this.loginForm.get('user');
   } 
   
  
  CourseDetails: data []= [];

  constructor(private studentAppserviceService:StudentAppserviceService,private route:ActivatedRoute,private router:Router) { 
  }


  ngOnInit(): void {
    this.getAllCourse();
    
  }
  getAllCourse() // getting course
  {
    this.studentAppserviceService.getAllCourses().subscribe((r:any)=>{
      console.log(r);
      this.allCourses=r;
    });
  }

  edit(row:any)
  { 
    this.editable=true;
    console.log(row);
    this.updateid=row.courseId;
    this.loginForm.controls['user'].patchValue(row.courseName);
  }
  
  updateCourse() // updating course
  {
    let request={
    courseName:this.loginForm.value.user
  }
    this.studentAppserviceService.updateCourse(this.updateid,request)
    .subscribe(
      {
        next: (response) => {
          console.log(response);
          this.getAllCourse();
        }
      });
  }

//deleting course
  delete(row:any)
  {
    this.updateid=row.courseId

  }
  deleteCourse() 
  {
    this.studentAppserviceService.deleteCourse(this.updateid)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.getAllCourse()
      }
    });
  }

  //adding course
  add()
{
  this.editable=false;
  this.loginForm.reset();
}

  AddCourse() 
  {
    let request={
      courseName:this.loginForm.value.user
    }

    this.studentAppserviceService.addCourse(request).subscribe((r:any)=>{
      console.log(r);

      this.getAllCourse()

    });
  }
 
  



  
 
}
