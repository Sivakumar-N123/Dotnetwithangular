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
studentId:any;
selectname:any;
specs:any;
courseform!:FormGroup
selectedspecname:any
loginForm: any;
studentAppserviceService: any;
updateid:any;
btnupdate=true;
  studentcourseId: any;
  studentselect: any;
  studentselect1: any;
  event={target:{value:""}};
  spec: string="";
  Add=true;

constructor(private fb:FormBuilder,private api:StudentAppserviceService)
{

}

ngOnInit(): void {
  
  this.courseform = this.fb.group({
    specvalue:[''],
    coursevalue:[''],
    studentName:[''],
    studentId:['']
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

Addstudent(){
  this.courseform.reset();
  this.Add=true;
  this.btnupdate=true;
}

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
    console.log(this.stu);
    
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
      let ref=document.getElementById('cancel');
      ref?.click();
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
getspecData(event:any)
{
  this.api.GetUserCourseDetByName(event.target.value).subscribe((r:any)=>{
    
    this.selectedspecname=r
    
  })
}

DeleteId:any;
DeleteCourse(det:any)
{
  this.DeleteId=det.id;

}

remove()
{
  this.api.deleteUserCourse(this.DeleteId).subscribe((r:any)=>{
   
    this.getUsercourse();
    alert("Delete Successfully");
  })
  this.courseform.reset();
}

dummyname:any;
dummyId:any;
EditCourse(det:any)
{
  this.Add=false;
  console.log(det);
  this.btnupdate=false;
  this.opened = true;
  
  this.updateid = det.id;
  this.studentcourseId =det.studentId;
  this.dummyId =det.studentId;
  this.dummyname = det.studentName;
  this.event.target.value=det.course
  this.getspecData(this.event)
  this.courseform.controls['studentName'].setValue(det.studentName);
  this.courseform.controls['coursevalue'].setValue(det.course);
  this.courseform.controls['specvalue'].setValue(det.spec);
  
}

 
 
flag1 = 0;
count=0;
record=0;
Update()
{
  this.btnupdate=true;
  this.flag1=0;
  this.count=0;
  this.record=0;

  let request:any ={
    "studentId":this.studentcourseId,
    "studentName": this.courseform.value.studentName,
    "Course": this.courseform.value.coursevalue,
    "Spec": this.courseform.value.specvalue,  
  }


  for(let i=0;i<this.stu.length;i++)
  {
    if(this.stu[i].studentId == this.studentcourseId)// same name
    {
      this.record++;
      if(this.dummyId == this.studentcourseId)
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
    else
    {
      this.count++;
    }
  }

  if(this.flag1==1)
  {
    alert("Update Successfully");
    let ref=document.getElementById('cancel');
      ref?.click();
      this.courseform.reset();
    this.getUsercourse();    
    
  }


  else if((this.count==this.stu.length)&&(this.record==0))
  {
    this.api.UpdateUserCourse(this.updateid,request).subscribe((r:any)=>{
      console.log(r);
      this.btnupdate=true;
      alert("Update Successfully");
      let ref=document.getElementById('cancel');
      ref?.click();
      this.courseform.reset();
    this.getUsercourse();    
    
      })
     
  }

  else
  {
    alert("User Already Exists");
    this.courseform.reset();
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


public opened = false;
public dataSaved = false;

public close(): void {
  this.opened = false;
}

public open(): void {
  this.opened = true;
}

public submit(): void {
    this.dataSaved = true;
    this.close();
}




}