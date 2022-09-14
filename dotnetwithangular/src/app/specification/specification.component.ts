import { Component, OnInit } from '@angular/core';
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
body:boolean=true;
body1:boolean=false;
title:boolean=true;
title1:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
edit1(){
   this.footer=true
   this.footer1=false
   this.body=true
   this.body1=false
   this.title=true
   this.title1=false
    }
delete1(){
  this.footer=false
  this.footer1=true
  this.body=false
  this.body1=true
  this.title=false
   this.title1=true
}


public gridData: Product[] = [
  {ID: 1,SpecificationName: "EEE",},
  {ID: 2,SpecificationName: "ECE",},
  {ID: 3,SpecificationName: "IT",},
];
}
