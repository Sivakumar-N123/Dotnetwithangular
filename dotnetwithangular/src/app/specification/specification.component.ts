import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ButtonThemeColor } from "@progress/kendo-angular-buttons";

interface userData{
  id:Number,
  name:string,
  userName:string
}

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})

export class SpecificationComponent implements OnInit {

  
footer:boolean=false;
footer1:boolean=true;
editfooter:boolean =false;
body:boolean=true;
body1:boolean=false;
title:boolean=true;
title1:boolean=false;

specForm!:FormGroup
submitted =false;
specName="";
  
  constructor(private formBuilder:FormBuilder) { }
 
  add1(){
    this.specForm.reset()
    this.footer=true
    this.editfooter=false
    this.footer1=false
    this.body=true
    this.body1=false
    this.title=true
    this.title1=false
  }
  ngOnInit() {
    //validations
    this.specForm = this.formBuilder.group({
      specName:['', Validators.required]
    })
  }
  onSubmit(){
    this.submitted = true
    if(this.specForm.invalid){
      return
    }
    else{
    alert("Saved Successfully")
    let ref =document.getElementById('cancel')
    ref?.click();
    this.gridData.push({ID: this.gridData.length+1,SpecificationName:this.specForm.value.specName})
    this.specForm.reset()
    }
  }

  public gridData: any[] = [
    {ID: 1,SpecificationName: "EEE",},
    {ID: 2,SpecificationName: "ECE",},
    {ID: 3,SpecificationName: "IT",},
  ];

  updateid: any;
  edit1(row:any)
  {
   this.editfooter=true
   this.footer=false
   this.footer1=false
   this.body=true
   this.body1=false
   this.title=true
   this.title1=false
   
   console.log(row);
   this.updateid=row.ID
   this.editfooter=true;
   this.specForm.controls['specName'].patchValue(row.SpecificationName);
  }
  update()
  {
    alert("Updated successfully")
    if(this.gridData.length && this.specForm.value.specName){

        this.gridData[this.updateid-1].SpecificationName=this.specForm.value.specName,
        
     
      this.specForm.reset();
    }
  }

 delete1(row:any)
  {
    this.footer=false
    this.footer1=true
    this.editfooter=false
    this.body=false
    this.body1=true
    this.title=false
    this.title1=true

    this.updateid=row.ID
  }
  remove()
  { alert("Deleted successfully")
    this.gridData.splice(this.updateid-1,1)
  }
  
}
