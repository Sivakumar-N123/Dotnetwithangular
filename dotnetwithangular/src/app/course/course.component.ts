import { Component, OnInit } from '@angular/core';
 import { FormGroup,FormControl, Validators } from '@angular/forms';
import { data } from '../model';
// import { ActivatedRoute, Router } from '@angular/router';
import { StudentAppserviceService } from '../Services/student-appservice.service';
// import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { HttpClient } from '@angular/common/http';



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
  messagecontent:string="";

   loginForm=new FormGroup({
    id : new FormControl(''),
    user :new FormControl('',[Validators.required]),
   })
  flag: number=1;
  course: any;
 
   loginUser(){
    console.warn(this.loginForm.value)
   }

   get user(){
    return this.loginForm.get('user');
   } 
   
   public toggleText = "Show";
   public show = false;
 
   public onToggle(): void {
     this.show = !this.show;
     this.toggleText = this.show ? "Hide" : "Show";
   }

   
  CourseDetails:data []= [];

  constructor(private studentAppserviceService:StudentAppserviceService) { 
    this.getAllCourse();
  }

  ngOnInit(): void {
   
  }
  getAllCourse() //getting course
  {
    this.studentAppserviceService.getAllCourses().subscribe((r:any)=>{
      console.log(r);
      this.allCourses=r;
    });
  }
  validatefnforedit()
  {
    this.flag=1;
    for(let i=0;i<this.allCourses.length;i++)
    {
      if(this.allCourses[i].courseName.toLowerCase() == this.loginForm.value.user.toLowerCase()){
        this.flag=0;
        break;
      }
    }
  
    if(this.flag==0)
    {
      this.opened = true;
      this.messagecontent="Already "+this.loginForm.value.user+" is present"
    }
    else {
      this.updateCourse();
    }
  }

  edit(row:any)
  { 
    this.editable=true;
    console.log(row);
    this.updateid=row.courseId;
    this.loginForm.controls['user'].patchValue(row.courseName);
  }
  
  updateCourse() //updating course
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
          this.opened = true;
          this.messagecontent="Course Updated Successfully"
          // alert ("updated sucessfully");
        }
      });
  }

//deleting course
  delete(row:any)
  {
    this.updateid=row.courseId
    this.course=row.courseName
  }
  deleteCourse() 
  {
    this.studentAppserviceService.deleteCourse(this.updateid)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.getAllCourse();
        this.opened = true;
        this.messagecontent="Course Deleted Successfully"
      }
    }); 
  }

  validatefn()
  {
    this.flag=1;
    for(let i=0;i<this.allCourses.length;i++)
    {
      if(this.allCourses[i].courseName.toLowerCase() == this.loginForm.value.user.toLowerCase()){
        this.flag=0;
        break;
      }
    }

    if(this.flag==0)
   {
      // alert("Already "+this.loginForm.value.user +" is present");
      this.opened = true;
      this.messagecontent="Already "+this.loginForm.value.user +" is present"
     
    }
    else {
      this.AddCourse();
    }
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
      this.opened = true;
      this.messagecontent="Course added Successfully"
   
    });
  }

  opened:boolean= false;

  public close(): void {
    this.opened = false;
  }
 

 
}
