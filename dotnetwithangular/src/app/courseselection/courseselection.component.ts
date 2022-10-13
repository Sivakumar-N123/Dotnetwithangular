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
  studentcourseId: any;

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

flag = 0;
AddCourse() 
  {
    this.flag=0;
    console.log(this.courseform.value);

   
    let request:any ={
      "studentId":this.studentcourseId,
      "studentName": this.courseform.value.studentName,
      "Course": this.courseform.value.coursevalue,
      "Spec": this.courseform.value.specvalue,
      
    }
    console.log(request);
    
    for(let i=0;i<this.stu.length;i++)
    {
      if(this.stu[i].studentId == this.studentcourseId)
      {
        this.flag=1;
        break;
      }
    }

    if(this.flag==1)
    {
      alert("User Already selected course");
      this.courseform.reset();
    }
    else
    {
      this.api.PutUserCourseDet(request).subscribe((r:any)=>{
      
        this.getUsercourse();
      });
      this.courseform.reset();
    }
  
  } 



getspecbyname(event:any)
{
  this.api.GetUserCourseDetByName(event.target.value).subscribe((r:any)=>{
    
    this.selectedspecname=r
    this.courseform.get('specvalue')?.reset();
  })
}

DeleteCourse(det:any)
{
  console.log(det.id);
  this.api.deleteUserCourse(det.id).subscribe((r:any)=>{
    alert("Delete Successfully");
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
  
  this.updateid = det.id;
  this.studentcourseId =det.studentId
  this.courseform.controls['studentName'].setValue(det.studentName);
  this.courseform.controls['coursevalue'].setValue(det.course);
  this.courseform.controls['specvalue'].setValue(det.spec);
  
}
flag1 = 0;
Update()
{
  this.flag1=0;

  let request:any ={
    "studentId":this.studentcourseId,
    "studentName": this.courseform.value.studentName,
    "Course": this.courseform.value.coursevalue,
    "Spec": this.courseform.value.specvalue,  
  }


  for(let i=0;i<this.stu.length;i++)
  {
    if(this.stu[i].studentId == this.studentcourseId)
    {
      this.api.UpdateUserCourse(this.updateid,request).subscribe((r:any)=>{
        console.log(r)
        this.getUsercourse();
        })
        this.flag1=1;
        this.btnupdate=true;
        break;
    }
  }

  if(this.flag1==1)
  {
    alert("Update Successfully");
    this.courseform.reset();
  }
  else
  {
    alert("Cannot Update");
  }


}
resetspecvalue()
{
  this.courseform.get('specvalue')?.reset();
}


data1:any;
rollno:any;
handleFilter(value:any) {
  this.data1 = this.stuname.filter((s:any) => s.studentName.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}
data2:any;
handleFilter1(value:any) {
  console.log(value);
  this.data2 = this.courses.filter((s:any) => s.courseName.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  
}
data3:any;
handleFilter2(value:any) {
  console.log(value);
  this.data3 = this.selectedspecname.filter((s:any) => s.specificationName.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  
}

empSelected(dataItem:any)
{
  console.log(dataItem);
  this.studentcourseId=dataItem.studentId;
  console.log(this.studentcourseId);
}



}