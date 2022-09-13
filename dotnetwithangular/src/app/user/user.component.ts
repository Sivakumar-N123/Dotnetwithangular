import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data: any[] = [{id:0, name: "Sivakumar N", userName: "sivakumar123" },
  {id:1, name: "Rajesh", userName: "rajesh123" },
  {id:2, name: "Mahima", userName: "mahima123" },
  {id:3, name:"Praveenraj",userName:"praveenraj123"},
  ];
  Form = new FormGroup({
    name: new FormControl(''),
    userName: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }
  edit(id:any)
  {
    id
  }

}
