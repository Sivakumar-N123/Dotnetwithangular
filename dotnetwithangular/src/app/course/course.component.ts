import { Component, OnInit } from '@angular/core';
 import { FormGroup,FormControl, Validators } from '@angular/forms';
import { data } from '../model';
import { StudentAppserviceService } from '../Services/student-appservice.service';
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
  editable:boolean=false;
  updateid: any;
  allCourses: any;
   loginUser(){
    console.warn(this.loginForm.value)
   }
   get user(){
    return this.loginForm.get('user');
   } 
   
  
  CourseDetails: data []= [];

  constructor(private studentAppserviceService:StudentAppserviceService) { 
  }


  ngOnInit(): void {
    this.getAllCourse()
  }
  getAllCourse()
  {
    this.studentAppserviceService.getAllCourses().subscribe((r:any)=>{
      console.log(r);

      this.allCourses=r;

    });
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
  delete(row:any)
  {
    this.updateid=row.CourseID
  }
  remove()
  {
    this.CourseDetails.splice(this.updateid-1,1)
  }

}
