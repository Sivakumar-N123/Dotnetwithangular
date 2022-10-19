
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentAppserviceService } from '../Services/student-appservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menutype:boolean=false;
  sessiondata:any
  profilename: string="";
  name1:any ;
  final_profile: string="";

  
  constructor(public router:Router,private studentAppserviceService:StudentAppserviceService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      console.log(val)
    this.sessiondata=sessionStorage.getItem("currentuser")
    this.sessiondata=JSON.parse(this.sessiondata)
    this.sessiondata=this.sessiondata.studentName;
    this.final_profile="";
    this.profilename=this.sessiondata;
    this.name1= this.profilename.split(' ');
    this.menutype=true;
  if(this.name1.length>1)
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
    })
    
  }
  
  logout()
  {
    this.menutype=false;
    this.studentAppserviceService.logout()
  }
 
}
