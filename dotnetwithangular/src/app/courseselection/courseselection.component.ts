import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentAppserviceService } from '../Services/student-appservice.service';

@Component({
  selector: 'app-courseselection',
  templateUrl: './courseselection.component.html',
  styleUrls: ['./courseselection.component.css']
})
export class CourseselectionComponent implements OnInit {
  
public text ="hello";
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
  studentname: any;
  coursename: any;
  specificationname: any;
  ret1: Array<number|string>[] = []; 
  

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
    this.stuname=r;
    this.ret1=this.stuname.map(((user: any) => user.studentId +" - " +user.studentName))
  })
  this.api.getAllCourses().subscribe((r:any)=>{
    this.courses=r;
  })

  this.getUsercourse();
}

getUsercourse()
{
  this.api.GetUserCourseDet().subscribe((r:any)=>{
    this.stu=r;
    console.log(this.stu);
  })
}


flag = 0;
public hideAfter = 1000;
Addstudent(){
  this.courseform.reset();
  this.Add=true;
  this.btnupdate=true;
}

profilename="";

splitId!:string[];
AddCourse() 
  {
    this.flag=0;
    console.log(this.courseform.value);
     this.profilename = this.courseform.value.studentName

    this.splitId= this.profilename.split('-');
    this.studentcourseId = this.splitId[0];
   
    let request:any ={
      "studentId":this.splitId[0],
      "studentName": this.splitId[1],
      "Course": this.courseform.value.coursevalue,
      "Spec": this.courseform.value.specvalue, 
    }
    
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
  this.studentname=det.studentName
  this.coursename=det.course
  this.specificationname=det.spec
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
  this.courseform.controls['studentName'].setValue(det.studentId+"-"+det.studentName);
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


  this.profilename = this.courseform.value.studentName

    this.splitId= this.profilename.split('-');
    this.studentcourseId = this.splitId[0];

  let request:any ={
    "studentId":this.splitId[0],
    "studentName": this.splitId[1],
    "Course": this.courseform.value.coursevalue,
    "Spec": this.courseform.value.specvalue,  
  }


  console.log(request);
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
    alert("Update Successfully in flag");

    this.getUsercourse();    
  
  }
  else if((this.count==this.stu.length)&&(this.record==0))
  {
    console.log(this.count)
    console.log(this.record)
    this.api.UpdateUserCourse(this.updateid,request).subscribe((r:any)=>{
      console.log(r);
      this.btnupdate=true;
      alert("Update Successfully");

    this.getUsercourse();    
    
    }) 
  }

  else
  {
    alert("User Already Exists");
    
  }
      let ref=document.getElementById('cancel');
      ref?.click();
      this.courseform.reset();
}

resetspecvalue()
{
  this.courseform.get('specvalue')?.reset();
}

data1:any;
rollno:any;
handleFilter(value:any) {
  console.log(typeof (this.ret1));
  this.data1 = this.ret1.filter((s:any) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  
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
  this.studentcourseId=dataItem.studentId;
  this.text=dataItem.studentId;
  this.text=this.text +"-"+dataItem.studentName;
  console.log("text"+this.text);
  this.courseform.controls['studentName'].setValue(this.text);  
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