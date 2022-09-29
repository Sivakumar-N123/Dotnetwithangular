import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {data,specData, specCoursedata } from '../model';
import { StudentAppserviceService } from '../Services/student-appservice.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-speccourse',
  templateUrl: './speccourse.component.html',
  styleUrls: ['./speccourse.component.css']
})
export class SpeccourseComponent implements OnInit {
 
  public CourseDetails:data []= [];

  data: specCoursedata | undefined;
  editable:boolean=false;
  allCourses: any;
  allSpecification:any;
  specName!:string;
  courseName!:string;
  updateSpecCourse:any;
  user:any;


  baseApiUrl:string = environment.baseApiUrl;

   loginForm=new FormGroup({
    Courselist : new FormControl('select Course',[Validators.required]),
    speclist :new FormControl('select specification',[Validators.required]),
   })
  AllSpeccourse: any;
 
 
   get Courselist(){
    return this.loginForm.get('Courselist');
   } 
   get speclist(){
    return this.loginForm.get('speclist');
   } 

  constructor(private studentAppserviceService:StudentAppserviceService) {
    this.getAllCourse();
    this.getAllSpecification();
    this.getAllSpeccourse();
   }

  ngOnInit(): void {
  }

  getAllCourse() 
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
  
  getAllSpeccourse()// getting Speccourse
  {
    this.studentAppserviceService.getAllSpecCourse().subscribe((r:any)=>{
      console.log(r);
      this.AllSpeccourse=r;
    });
  }




  AddCourse() 
  {
    console.log(
      this.loginForm.value
    );
    
    let request:any ={
        "courseId": this.loginForm.value.Courselist.courseId,
        "courseName": this.loginForm.value.Courselist.courseName,
        "specificationId": this.loginForm.value.speclist.specificationId,
        "specificationName": this.loginForm.value.speclist.specificationName
    }

    this.studentAppserviceService.addspecCourse(request).subscribe((r:any)=>{
      console.log(r);
      this.getAllSpeccourse()
    });
    
  } 
  // edit(row:any)
  // { 
    
  //   this.editable=true;
  //   console.log(row);
  //   this.updateSpecCourse=row.courseId;
  //   this.loginForm.controls['user'].patchValue(row.courseName);
  // }
   
 
  editSpecCourse(row:any){
   
    console.log(row);
    this.updateSpecCourse=row.courseId;
    this.loginForm.controls['user'].setValue(row.courseId);
    this.loginForm.controls['user'].patchValue(row.courseName);
    this.loginForm.controls['user'].patchValue(row.specCourseId);
    this.loginForm.controls['user'].patchValue(row.specificationName);
  }
  
  
  
  updateSpecCourses() // updating course
  {
    let request:any ={
      "courseId": this.loginForm.value.Courselist.courseId,
      "courseName": this.loginForm.value.Courselist.courseName,
      "specificationId": this.loginForm.value.speclist.specificationId,
      "specificationName": this.loginForm.value.speclist.specificationName
  }

  
    this.studentAppserviceService.updateSpecCourses(this.updateSpecCourse,request)
    .subscribe(
      {
        next: (response) => {
          console.log(response);
          this.getAllCourse();      
        }
      });
  }

  delete(row:any)
  {
    console.log(row);
    
    this.updateSpecCourse=row.specCourseId
  }
  deleteSpecCourse(row:any)
  {
    console.log(row);
    this.studentAppserviceService.deleteSpecCourse(row.specCourseId)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.getAllSpeccourse();
      }
    });
  }


}