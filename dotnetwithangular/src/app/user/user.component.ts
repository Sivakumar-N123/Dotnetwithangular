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
    email: new FormControl('',[
      Validators.required,Validators.email
     
    ]),
  });
  allusers:any;
  name: any;
  emailid: any;
  profilename: any;
  name1: string="";
  final_profile: string="";
  imgtrue: boolean=true;
  activeUsers:userData[]=[];
  

  constructor(private studentAppserviceService:StudentAppserviceService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

//getting the user
  getAllUsers()
  {
    this.activeUsers=[];
    this.studentAppserviceService.getAllusers().subscribe((r:any)=>{
      console.log(r);
      this.allusers=r;

      for(let i=0;i<this.allusers.length;i++)
      {
      if(this.allusers[i].isActive==true)
      {
        if(this.allusers[i].profileImage==null)
        {
           this.imgtrue=false;

            this.profilename=this.allusers[i].userName;
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
          this.activeUsers.push(this.allusers[i]);
        }
        
      this.final_profile="";
  }
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
    console.log(row);
    
    this.updateid=row.id
    this.editable=true;
 
    this.Form.controls['userName'].setValue(row.userName)
    this.Form.controls['email'].setValue(row.email)
  }
  update()
  {
    if(this.Form.controls['email' && 'userName'].valid){
      let request={
      
      "userName":this.Form.value.userName,
      "email":this.Form.value.email,
      
      }
      this.studentAppserviceService.updateUser(this.updateid,request).subscribe((r:any)=>{
        console.log(r);
  
        this.getAllUsers()
  
      });
  }
}
// adding the user

  reset()
  {
    this.editable=false;
    this.Form.reset();
  }
  add()
  {
    if(this.Form.controls['email' && 'userName'].valid){
      let request={
      userName:this.Form.value.userName,
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
    this.name=row.userName
    this.emailid=row.email
   
    
  }
  remove()
  {
    let request={
      "userName":this.name,
      "email":this.emailid,
      "isActive":false
      }

    this.studentAppserviceService.deleteUser(this.updateid,request).subscribe((r:any)=>{
      console.log(r);

      this.getAllUsers()

    });
  }
  
}
