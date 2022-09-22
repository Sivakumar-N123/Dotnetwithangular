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
  

  constructor(private studentAppserviceService:StudentAppserviceService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

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
      
      userName:this.Form.value.userName,
      email:this.Form.value.email,

      }
      this.studentAppserviceService.updateUser(this.updateid,request).subscribe((r:any)=>{
        console.log(r);
  
        this.getAllUsers()
  
      });
  }
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
     
    
   
   
    
    // if(this.userdata.length && this.Form.value.userName){
    //   this.userdata.push({
    //     id: this.userdata.length,
    //     name: this.Form.value.name,
    //     userName:this.Form.value.userName
    //   })
    //   alert("Added successfully")
     
    // }
    
  }
  delete(row:any)
  {
    console.log(row);
    
    this.updateid=row.id
  }
  remove()
  {
    // this.userdata.splice(this.updateid,1)
    // let count=0;
    // for(let i=0;i=this.userdata.length;i++)
    // {
    //   if(i==this.userdata[i].id){

    //     this.userdata[i].id=count;
        
    //     count++
    //   } 
    // }
    // console.log(this.userdata);
    this.studentAppserviceService.deleteUser(this.updateid).subscribe((r:any)=>{
      console.log(r);

      this.getAllUsers()

    });
  }
  reset()
  {
    this.editable=false;
    this.Form.reset();
  }
}
