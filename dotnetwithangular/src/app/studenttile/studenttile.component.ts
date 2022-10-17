import { Component, OnInit } from '@angular/core';
import { userData } from '../model';
import { StudentAppserviceService } from '../Services/student-appservice.service';

@Component({
  selector: 'app-studenttile',
  templateUrl: './studenttile.component.html',
  styleUrls: ['./studenttile.component.css']
})
export class StudenttileComponent implements OnInit {
  allusers: any;
  profilename:string="";
  name1: any;
  imgtrue:boolean=true;
  final_profile:string="";
  count: number=0;
  activeUsers:userData[]=[];

  constructor(private studentAppserviceService:StudentAppserviceService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers()
  {
    this.activeUsers=[];
    this.studentAppserviceService.getAllusers().subscribe((r:any)=>{
      console.log(r);

      this.allusers=r;

for(let i=0;i<this.allusers.length;i++)
{
  if((this.allusers[i].isActive==true) && (this.allusers[i].isStudent==true))
  {
    this.count++;
      if(this.allusers[i].profileImage==null)
      {
        this.imgtrue=false;

        this.profilename=this.allusers[i].studentName;
      this.name1= this.profilename.split('');
  
      if(this.name1.length>=2)
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

      console.log(this.final_profile);
      this.allusers[i].profileImage=this.final_profile;
      this.activeUsers.push(this.allusers[i]);
    }
  }
    this.final_profile="";

}
console.log(this.allusers);
    });
  }

}
