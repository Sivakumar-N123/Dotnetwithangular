import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userData } from '../model';
import { StudentAppserviceService } from '../Services/student-appservice.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  submitted = false;
  editable:boolean = false;
  updateid: any;
  Form = new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    email: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  });
  allusers:any;
  name: any;
  emailid: any;
  profilename: any;
  name1: string="";
  final_profile: string="";
  imgtrue: boolean=true;
  flag: number=1;
  count: number=0;
  updateEmail: any;
  studentid: any;
  
  

  constructor(private studentAppserviceService:StudentAppserviceService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

//getting the user
  getAllUsers()
  {
   
    this.studentAppserviceService.getAllusers().subscribe((r:any)=>{
      console.log(r);
      
      this.allusers=r;

      for(let i=0;i<this.allusers.length;i++)
      {
      
      
        if(this.allusers[i].profileImage==null)
        {
           this.imgtrue=false;

            this.profilename=this.allusers[i].studentName;
          
            this.name1= this.profilename.split(' ');
  
          if(this.name1.length>=2)
          {
            for(let i=0;i<2;i++)
            {
              this.final_profile = this.final_profile + this.name1[i].charAt(0).toUpperCase();
           }
          }
          else{
              this.final_profile = this.final_profile + this.name1[0].charAt(0).toUpperCase();
              this.final_profile = this.final_profile + this.name1[0].charAt(1).toUpperCase();
          }
          console.log(this.final_profile);
          this.allusers[i].profileImage=this.final_profile;
          
        }
        
      this.final_profile="";
  
}
console.log(this.allusers);


    });
  }
  
  get email() {
    return this.Form.get('email')!;
  }
  get userName() {
    return this.Form.get('userName')!;
  }

 

  // updating the user
  edit(row:any)
  {
    this.Form.controls['email'].disable();
    console.log(row);
    
    this.updateid=row.id
    this.editable=true;
    this.updateEmail=row.email
    this.Form.controls['userName'].setValue(row.studentName)
    this.Form.controls['email'].setValue(row.email)
  }
  update()
  {
  
    if(this.Form.controls['email' && 'userName'].valid){
      let request={
      
      "studentName":this.Form.value.userName,
      "email":this.updateEmail,
      
      }
      this.studentAppserviceService.updateUser(this.updateid,request).subscribe((r:any)=>{
        console.log(r);
  
        this.getAllUsers()
  
      });
  }
}




validatefn(){
  this.flag=1;
  for(let i=0;i<this.allusers.length;i++)
  {
    if(this.allusers[i].email.toLowerCase() == this.Form.value.email.toLowerCase()){
      this.flag=0;
      break;
    }
  }

  if(this.flag==0)
  
{
    alert("Already "+this.Form.value.email +" is present");
    window.location.reload();
   
  }
  else {
    this.add();
  }
}
// adding the user

  reset()
  {
    this.editable=false;
    this.Form.reset();
    this.Form.controls['email'].enable();
  }
  add()
  {
    if(this.Form.controls['email' && 'userName'].valid){
      let request={
      studentName:this.Form.value.userName,
      email:this.Form.value.email
      }

      this.studentAppserviceService.addUser(request).subscribe((r:any)=>{
        console.log(r);
  
        this.getAllUsers()
  
      });
    }
     
  }

  delete(row:any)
  {
    console.log(row);
    
    this.updateid=row.id
    this.studentid=row.studentId
    this.name=row.studentName
    this.emailid=row.email
   
    
  }
  remove()
  {
    let request={
      "studentName":this.name,
      "email":this.emailid,
      "isActive":false
      }

    this.studentAppserviceService.deleteUser(this.updateid,request).subscribe((r:any)=>{
      console.log(r);

      this.getAllUsers()

    });
  }
}