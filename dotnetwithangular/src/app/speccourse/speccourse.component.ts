import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {data, ProductCourse, ProductSpec, specdata } from '../model';
import { StudentAppserviceService } from '../Services/student-appservice.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-speccourse',
  templateUrl: './speccourse.component.html',
  styleUrls: ['./speccourse.component.css']
})
export class SpeccourseComponent implements OnInit {
  [x: string]: any;

  public listItems: Array<string> = ["Item 1", "Item 2", "Item 3"];

  public CourseDetails:data []= [];

  data: specdata | undefined;
  editable:boolean=false;
  allCourses: any;
  
  

  baseApiUrl:string = environment.baseApiUrl;

   loginForm=new FormGroup({
    id : new FormControl(''),
    user :new FormControl('',[Validators.required]),
   })
 
   loginUser(){
    console.warn(this.loginForm.value);
   }
   get user(){
    return this.loginForm.get('user');
   } 
   

   public ProductCourse: data = {
    courseName: "Course",
     courseId:0
   };
   

   public ProductSpec: ProductSpec = {
    specName: "Specification",
    specId: null
 
  };

 public SpecCourseDetails:specdata []= [];

  constructor(private studentAppserviceService:StudentAppserviceService) {
    this.getAllCourse();
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

}