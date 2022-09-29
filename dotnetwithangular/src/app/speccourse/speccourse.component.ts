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
  specName!:string;
  courseName!:string;

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
//   add()
// {
//   this.editable=false;
//   this.loginForm.reset();
// }


//get the value of dropdown
onChangeCourse(event:any)
{
  console.log(event);
  this.courseName=event.target.value
}
onChangeSpec(event:any)
{
  console.log(event);
  this.specName=event.target.value
}

  AddCourse() 
  {
    console.log(
      this.loginForm.value
    );
    
    let request={
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
}