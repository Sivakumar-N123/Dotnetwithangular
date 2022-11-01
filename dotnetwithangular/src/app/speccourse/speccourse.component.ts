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
  flag : any;
  messagecontent:string="";
  opened:boolean= false;
  public close(): void {
    this.opened = false;
  }


  baseApiUrl:string = environment.baseApiUrl;

   loginForm=new FormGroup({
    Courselist : new FormControl('',[Validators.required]),
    speclist :new FormControl('',[Validators.required]),
   })
  AllSpeccourse: any;
  specificationName: any;
  courseName1: any;
  specificationName1: any;
 
 
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


  validatefn(){
    this.flag=1;
    for(let i=0;i<this.AllSpeccourse.length;i++)
    {
      if((this.AllSpeccourse[i].courseName.toLowerCase() == this.loginForm.value.Courselist.courseName.toLowerCase()) && (this.AllSpeccourse[i].specificationName.toLowerCase() == this.loginForm.value.speclist.specificationName.toLowerCase())){
        this.flag=0;
        break;
      }
    }

    if(this.flag==0)
    {
      this.opened = true;
      this.messagecontent="Already "+this.loginForm.value.Courselist.courseName+" is associated with "+this.loginForm.value.speclist.specificationName

    }
    else {
      this.AddCourse();
    }
  }

  reset()
  {
    this.loginForm.reset();
  }
  AddCourse() 
  {
    
    let request:any ={
      "courseId": this.loginForm.value.Courselist.courseId,
      "courseName": this.loginForm.value.Courselist.courseName,
      "specificationId": this.loginForm.value.speclist.specificationId,
      "specificationName": this.loginForm.value.speclist.specificationName
    }

    this.studentAppserviceService.addspecCourse(request).subscribe((r:any)=>{
      console.log(r);
      this.getAllSpeccourse();
      this.opened = true;
      this.messagecontent="Course Mapping Added sucessfully"
    
    });
  } 

  editSpecCourse(row:any){
    this.editable=true;
    this.updateSpecCourse=row.specCourseId;
    this.loginForm.controls['Courselist'].patchValue(this.allCourses.find((i:any)=>i.courseId==row.courseId));
    this.loginForm.controls['speclist'].patchValue(this.allSpecification.find((i:any)=>i.specificationId==row.specificationId));
  
  }
  

  validatefnforupdate(){
    
    this.flag=1;
    for(let i=0;i<this.AllSpeccourse.length;i++)
    {
      if((this.AllSpeccourse[i].courseName == this.loginForm.value.Courselist.courseName) && (this.AllSpeccourse[i].specificationName  == this.loginForm.value.speclist.specificationName)){
        this.flag=0;
        break;
      }
    }

    if(this.flag==0)
    {
      this.opened = true;
      this.messagecontent="Already "+this.loginForm.value.Courselist.courseName+" is associated with "+this.loginForm.value.speclist.specificationName
    }
    else {
      this.updateSpecCourses();
    }
  }


  updateSpecCourses() // updating course
  {

    let request:any ={
      courseId: this.loginForm.value.Courselist.courseId,
      courseName: this.loginForm.value.Courselist.courseName,
      specificationId: this.loginForm.value.speclist.specificationId,
      specificationName: this.loginForm.value.speclist.specificationName
  }

    this.studentAppserviceService.updateSpecCourses(this.updateSpecCourse,request)
    .subscribe(
      {
        next: (response) => {
          console.log(response);
        
        }
      });
      this.editable=false;
      this.opened = true;
      this.messagecontent="Course Mapping Updated sucessfully"
  }

  delete(row:any)
  {
    console.log(row);
    
    this.updateSpecCourse=row.specCourseId
    this.courseName1=row.courseName
    this.specificationName1=row.specificationName
  }

  deleteSpecCourse()
  {
    console.log(this.updateSpecCourse); 
    this.studentAppserviceService.deleteSpecCourse(this.updateSpecCourse)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.getAllSpeccourse();
        this.opened = true;
        this.messagecontent="Course Mapping Deleted sucessfully"
      }
    });
  }

}