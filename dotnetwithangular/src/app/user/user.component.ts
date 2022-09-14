import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
interface userData{
  id:Number,
  name:string,
  userName:string
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  submitted = false;
  userdata: userData[] = [{id:0, name: "Sivakumar N", userName: "sivakumar123" },
  {id:1, name: "Rajesh", userName: "rajesh123" },
  {id:2, name: "Mahima", userName: "mahima123" },
  {id:3, name:"Praveenraj",userName:"praveenraj123"},
  ];
  Form = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  get f() { return this.Form.controls; }
  
  edit()
  {

  }
  onSubmit()
  {
    console.log(this.Form);
    
  }
  add()
  {
    this.userdata.push({
      id: this.userdata.length,
      name: this.Form.value.name,
      userName:this.Form.value.userName
    })
  }
  reset()
  {
    this.Form.reset();
  }
}
