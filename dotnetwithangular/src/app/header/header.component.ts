import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sessiondata: any ;

  
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.sessiondata=sessionStorage.getItem("currrentuser")
    console.log()
  }
  logout()
  {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);

  }
}
