import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

 

   public gridData: any []= [
    {
      CourseID: 1,CourseName:"Chai"
    },
    {
      CourseID: 2,CourseName:"Chang"
    },
    {
      CourseID: 3,CourseName:"Aniseed Syrup"
    },
  ];


  constructor() { 
  }
  edited:boolean=false;
  deleted:boolean=false;
  added:boolean=true;
  body:boolean=true;
  body2:boolean=false;
  header:boolean=true;
  body3:boolean=false;

  ngOnInit(): void {
  }
  public onButtonClick(): void {
    console.log("click");
    alert("Do you want to delete");
  }
 
  adding(){
    this.body=true;
    this.body2=false;
    this.body3=false;
    this.added=true;
    this.edited=false;
    this.deleted=false;
  }
  update(){
   this.body=false;
   this.body2=false;
   this.body3=true;
   this.edited=true;
   this.added=false;
   this.deleted=false
  }
  delete(){
   this.deleted=true;
   this.edited=false;
   this.added=false;
   this.body2=true;
   this.body=false;
   this.body3=false;
  }
 
}
