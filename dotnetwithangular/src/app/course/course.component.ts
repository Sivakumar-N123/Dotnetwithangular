import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }
  edit:boolean=false;
  delete:boolean=false;
  add:boolean=true;
  body1 :boolean = true;
  header1 :boolean =true;
  header:boolean=true;
  body:boolean=true;
  body2:boolean=true;
  ngOnInit(): void {
  }
  array=[
    { 
      Id:1,
      Name:"mahi"
    }
  ]
  delete1(){
    this.edit=false
    this.delete=true
    this.add=false
    this.body1=true
    this.header1=false
    this.body=false
    this.header=false
    this.body2=false
  }
  myfun(){
    alert("Deleted Successfully");
  }
  edit1(){
    this.edit=true
    this.delete=false
    this.add=false
    this.body1=false
    this.header1=false
    this.body=true
    this.header=true
    this.body2=false
  }
  add1(){
    this.add=true
    this.body=true
    this.header=true
    this.body1=false
    this.header1=false
    this.delete=false
    this.edit=false
    this.body2=false
  }

  // header1(){
  //   this.header1=true
  //   this.delete=false
  //   this.edit=false
  // }
  // body1(){
  //   this.body1=true
  //   this.delete=false
  //   this.edit=false
  // }
  

}
