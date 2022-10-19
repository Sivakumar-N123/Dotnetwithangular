import {Component,   OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentAppserviceService } from '../Services/student-appservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  sessiondata: any ;
  status:string="";
  
  constructor(public router:Router,private data:StudentAppserviceService) { }

  ngOnInit(): void {

    
  }

  logout()
  {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
    

  }




}
