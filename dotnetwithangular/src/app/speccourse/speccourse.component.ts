import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {data,specData, specdata } from '../model';
import { StudentAppserviceService } from '../Services/student-appservice.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-speccourse',
  templateUrl: './speccourse.component.html',
  styleUrls: ['./speccourse.component.css']
})
export class SpeccourseComponent implements OnInit {
 
  public CourseDetails:data []= [];

  data: specdata | undefined;
  editable:boolean=false;
  allCourses: any;
  allSpecification:any;
  

  baseApiUrl:string = environment.baseApiUrl;

   loginForm=new FormGroup({
    Courselist : new FormControl('',[Validators.required]),
    speclist :new FormControl('',[Validators.required]),
   })
 
  //  loginUser(){
  //   console.warn(this.loginForm.value);
  //  }
  //  get (){
  //   return this.loginForm.get('user');
  //  } 
   

   public ProductCourse: data = {
    courseName: "Course",
     courseId:0
   };
   

   public ProductSpec: specData = {
    specificationName: "Specification",
    specificationId: 0
  };



  constructor(private studentAppserviceService:StudentAppserviceService) {
    this.getAllCourse();
    this.getAllSpecification();
   }

  ngOnInit(): void {
  }

  getAllCourse() // getting course
  {
    this.studentAppserviceService.getAllCourses().subscribe((r:any)=>{
      console.log(r);
      this.allCourses=r;
    });
  }
  getAllSpecification() // getting Specification
  {
    this.studentAppserviceService.getAllSpecification().subscribe((r:any)=>{
      console.log(r);
      this.allSpecification=r;
    });
  }
  add()
{
  this.editable=false;
  this.loginForm.reset();
}

  AddCourse() 
  {
    console.log(
      this.loginForm.value
    );
    
    let request={
      courseName:this.loginForm.value.user
    }

    this.studentAppserviceService.addCourse(request).subscribe((r:any)=>{
      console.log(r);
      this.getAllCourse()
    });
    
  }



  // getting value from dropdown

  
}