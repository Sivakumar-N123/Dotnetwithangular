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
stuname:any;

selectname:any;
specs:any;
courseform!:FormGroup
selectedspecname:any
loginForm: any;
studentAppserviceService: any;
updateid:any;
btnupdate=true;

constructor(private fb:FormBuilder,private api:StudentAppserviceService)
{

}

ngOnInit(): void {
  
  this.courseform = this.fb.group({
    specvalue:[''],
    coursevalue:[''],
    studentName:[''],
  })

  this.api.getAllusers().subscribe((r:any)=>{
    console.log(r);
    this.stuname=r;
  })
  this.api.getAllCourses().subscribe((r:any)=>{
    console.log(r);
    this.courses=r;
  })

  this.getUsercourse();
}


getUsercourse()
{
  this.api.GetUserCourseDet().subscribe((r:any)=>{
    console.log(r);
    this.stu=r;
  })
}


AddCourse() 
  {
    console.log(this.courseform.value);

   
    let request:any ={
      "username": this.courseform.value.studentName,
      "Course": this.courseform.value.coursevalue,
      "Spec": this.courseform.value.specvalue,
      
    }

    this.api.PutUserCourseDet(request).subscribe((r:any)=>{
      console.log(r);
      this.getUsercourse();
    });
    this.courseform.reset();
  } 



getspecbyname(event:any)
{
  this.api.GetUserCourseDetByName(event.target.value).subscribe((r:any)=>{
    console.log(r)
    this.selectedspecname=r
    // this.courseform.get('uservalue')?.reset();
  })
}

DeleteCourse(det:any)
{
  console.log(det.id);
  this.api.deleteUserCourse(det.id).subscribe((r:any)=>{
    console.log(r)
    this.getUsercourse();
  })
  this.courseform.reset();
}
cancelfn()
{
  this.btnupdate=true;
  this.courseform.reset();
}
EditCourse(det:any)
{
  this.btnupdate=false;
  console.log(det);
  this.updateid = det.id;
  this.courseform.controls['studentName'].setValue(det.username);
  this.courseform.controls['coursevalue'].setValue(det.course);
  this.courseform.controls['specvalue'].setValue(det.spec);
  
}

Update()
{

  let request:any ={
    "username": this.courseform.value.studentName,
    "Course": this.courseform.value.coursevalue,
    "Spec": this.courseform.value.specvalue,  
  }

  this.api.UpdateUserCourse(this.updateid,request).subscribe((r:any)=>{
    console.log(r)
    this.getUsercourse();
  })
    this.btnupdate=true;

}


}