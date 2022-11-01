import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { specData } from '../model';

import { StudentAppserviceService } from '../Services/student-appservice.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})

export class SpecificationComponent implements OnInit {


  editable:boolean=false;
  updateid: any;
  allSpecification: any;
   
  baseApiUrl:string = environment.baseApiUrl;
  messagecontent:string="";
  specData: specData | undefined;
 

   loginForm=new FormGroup({
    user :new FormControl('',[Validators.required]),
   })
  flag: number=1;
  Specification: any;
  
 
   loginUser(){
    console.warn(this.loginForm.value)
   }
   get user(){
    return this.loginForm.get('user');
   } 
   
   opened:boolean= false;

  close(): void {
     this.opened = false;
   }


  constructor(private studentAppserviceService:StudentAppserviceService) { 
  }


  ngOnInit(): void {
    this.getAllSpecification();
    
  }
  getAllSpecification() // getting Specification
  {
    this.studentAppserviceService.getAllSpecification().subscribe((r:any)=>{
      console.log(r);
      this.allSpecification=r;
    });
  }
  validatefnforedit()
  {
    this.flag=1;
    for(let i=0;i<this.allSpecification.length;i++)
    {
      if(this.allSpecification[i].specificationName.toLowerCase() == this.loginForm.value.user.toLowerCase()){
        this.flag=0;
        break;
      }
    }
  
    if(this.flag==0)   
    {
      this.opened = true;
      this.messagecontent="Already "+this.loginForm.value.user +" is present";    
    }
    else {
      this.updateSpecification();
    }
  }
  edit(row:any)
  { 
    this.editable=true;
    console.log(row);
    this.updateid=row.specificationId;
    this.loginForm.controls['user'].patchValue(row.specificationName);
  }
  
  updateSpecification() // updating Specification
  {
    let request={
      specificationName:this.loginForm.value.user
  }
    this.studentAppserviceService.updateSpecification(this.updateid,request)
    .subscribe(
      {
        next: (response) => {
          console.log(response);
          this.getAllSpecification();
          this.opened = true;
      this.messagecontent="Course added Successfully"
          alert("updated successfully");
        }
      });
  }

//deleting Specification
  delete(row:any)
  {
    this.updateid=row.specificationId
    this.Specification=row.specificationName
  }
  deleteSpecification() 
  {
    this.studentAppserviceService.deleteSpecification(this.updateid)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.getAllSpecification()
        alert("Deleted successfully");
      }
    });
  }
  validatefn()
  {
    this.flag=1;
    for(let i=0;i<this.allSpecification.length;i++)
    {
      if(this.allSpecification[i].specificationName.toLowerCase() == this.loginForm.value.user.toLowerCase()){
        this.flag=0;
        break;
      }
    }
  
    if(this.flag==0)
    
  {
      alert("Already "+this.loginForm.value.user +" is present");
      window.location.reload();
     
    }
    else {
      this.AddSpecification();
    }
  }
  //adding course
  add()
{
  this.editable=false;
  this.loginForm.reset();
}

  AddSpecification() 
  {
    let request={
      specificationName:this.loginForm.value.user
    }

    this.studentAppserviceService.addSpecification(request).subscribe((r:any)=>{
      console.log(r);

      this.getAllSpecification()
      alert("Added successfully");

    });
  }
 }







