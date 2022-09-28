import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  allusers: any;
  name: any;
  emailid: any;
  

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
