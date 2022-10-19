import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentAppserviceService } from '../Services/student-appservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private studentAppserviceService:StudentAppserviceService)
  {

  }

  ngOnInit(): void {
    console.log(this.studentAppserviceService.currentuser);
  }

  user()
  {
    this.router.navigateByUrl('/updateprofile');
  }
}
