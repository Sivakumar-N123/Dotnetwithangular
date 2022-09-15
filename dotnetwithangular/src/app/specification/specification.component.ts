import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonThemeColor } from "@progress/kendo-angular-buttons";
import { Product } from "../model";

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
    this.gridData.push({ID: this.gridData.length+1,SpecificationName:this.specForm.value.specName})
    }
  }
  public gridData: any[] = [
    {ID: 1,SpecificationName: "EEE",},
    {ID: 2,SpecificationName: "ECE",},
    {ID: 3,SpecificationName: "IT",},
  ];
 
edit1(){
   this.editfooter=true
   this.footer=false
   this.footer1=false
   this.body=true
   this.body1=false
   this.title=true
   this.title1=false
    }
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
delete1(){
  this.footer=false
  this.footer1=true
  this.editfooter=false
  this.body=false
  this.body1=true
  this.title=false
   this.title1=true
}

save(){
  alert("Saved successfully")
}
update(){
  alert("Updated successfully")
}
yes(){
  alert("Deleted successfully")
}

}
