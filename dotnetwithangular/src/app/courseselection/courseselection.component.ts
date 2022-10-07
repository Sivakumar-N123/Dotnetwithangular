import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { StudentAppserviceService } from '../Services/student-appservice.service';

@Component({
  selector: 'app-courseselection',
  templateUrl: './courseselection.component.html',
  styleUrls: ['./courseselection.component.css']
})
export class CourseselectionComponent implements OnInit {

stu:any;
courses:any;
selectname:any;
specs:any;
courseform!:FormGroup
selectedspecname:any
  loginForm: any;
  studentAppserviceService: any;

constructor(private fb:FormBuilder,private api:StudentAppserviceService)
{

}

ngOnInit(): void {
  this.api.getAllusers().subscribe((r:any)=>{
    console.log(r);
    this.stu=r;
  })
  this.courseform = this.fb.group({
    uservalue:[''],
    studentName:[''],
  })
  
  this.api.getAllCourses().subscribe((r:any)=>{
    console.log(r);
    this.courses = r;
  })
  this.api.getAllSpecification().subscribe((r:any)=>{
    console.log(r);
    this.specs=r;
  })

  
}

sub()
{
  // console.log(this.courseform.value.uservalue);
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
      this.getAllSpeccourse();
      window.location.reload();
    });
  } 
  getAllSpeccourse() {
    throw new Error('Method not implemented.');
  }
getspecbyname(event:any)
{
  this.api.getSpecCourseByCourseName(event.target.value).subscribe((r:any)=>{
    console.log(r)
    this.selectedspecname=r
    this.courseform.get('uservalue')?.reset();
  })
}
}