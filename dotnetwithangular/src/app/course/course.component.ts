import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { FormGroup,FormControl,FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 
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
   
   displayVal:String='';
   getValue(val:String){
      console.warn(val);
      this.displayVal=val;
   }

  CourseDetails: any []= [
    
    {
      CourseID: 1,CourseName:"Mahima"
    },
    {
      CourseID: 2,CourseName:"Aarthi"
    },
    {
      CourseID: 3,CourseName:"Shiva"
    },
    {
      CourseID: 4,CourseName:"Rajesh"
    },
    {
      CourseID: 5,CourseName:"JayaPrakash"
    },
    {
      CourseID: 6,CourseName:"Preethi"
    },
  ];

  constructor() { 
   
  }
  edited:boolean=false;
  deleted:boolean=false;
  added:boolean=true;
  body:boolean=true;
  body2:boolean=false;
  header:boolean=true;
  body3:boolean=false;


  ngOnInit(): void {
  }
  public onButtonClick(): void {
    console.log("click");
    alert("Deleted successfully....!");
  }
  public onButtonClick1(): void {
    console.log("click");
    alert("Added Successfully....!");
    this.body=true;
    this.CourseDetails.push({CourseID: this.CourseDetails.length+1,CourseName:this.loginForm.value.user})

  }
  public onButtonClick2(): void {
    console.log("click");
    alert("Updated Successfully....!");
  }
  adding(){
    this.body=true;
    this.body2=false;
    this.body3=false;
    this.added=true;
    this.edited=false;
    this.deleted=false;
    this.header=true;
  }
  update(){
    this.CourseDetails.pop();
   this.body=false;
   this.body2=false;
   this.body3=true;
   this.edited=true;
   this.added=false;
   this.deleted=false;
   this.header=true;
  }

  deleting(){
    this.deleted=true;
   this.edited=false;
   this.added=false;
   this.header=false;
   this.body2=true;
   this.body=false;
   this.body3=false;
     
  }
  update1(){
    this.loginForm.reset();
      this.body=true;
      this.body2=false;
      this.body3=false;
      this.added=true;
      this.edited=false;
      this.deleted=false;
  }
  



}
