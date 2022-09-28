import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { specData } from '../model';
import { ActivatedRoute, Router } from '@angular/router';
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


  specData: specData | undefined;
 

   loginForm=new FormGroup({
    user :new FormControl('',[Validators.required]),
   })
  
 
   loginUser(){
    console.warn(this.loginForm.value)
   }
   get user(){
    return this.loginForm.get('user');
   } 
   
  
  Specification: specData []= [];

  constructor(private studentAppserviceService:StudentAppserviceService,private route:ActivatedRoute,private router:Router) { 
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
          alert("updated successfully");
        }
      });
  }

//deleting Specification
  delete(row:any)
  {
    this.updateid=row.specificationId

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







