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
  updateid: any;
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
    {CourseID: 1,CourseName:"Mahima"},
    {CourseID: 2,CourseName:"Aarthi"},
    {CourseID: 3,CourseName:"Shiva"},
    {CourseID: 4,CourseName:"Rajesh"},
    {CourseID: 5,CourseName:"JayaPrakash"},
    {CourseID: 6,CourseName:"Preethi"},
  ];
  constructor() { 
  }
editable:boolean=false;
  ngOnInit(): void {
  }
  public DeleteClick(): void {
    alert("Deleted successfully....!");
  }
  public AddClick(): void {
    alert("Added Successfully....!");
    this.CourseDetails.push({CourseID: this.CourseDetails.length+1,CourseName:this.loginForm.value.user})
  }
  public UpdateClick(): void {  
    alert("Updated Successfully....!");
      if(this.CourseDetails.length && this.loginForm.value.user){
        this.CourseDetails[this.updateid-1].CourseName=this.loginForm.value.user
      }
  }
add()
{
  this.editable=false;
  this.loginForm.reset();
}
edit(row:any)
  {
    this.editable=true;
    console.log(row);
    this.updateid=row.CourseID;
    this.loginForm.controls['user'].patchValue(row.CourseName);
  }
}
