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
  editable:boolean = false;

  userdata: userData[] = [{id:0, name: "Sivakumar N", userName: "sivakumar123" },
  {id:1, name: "Rajesh", userName: "rajesh123" },
  {id:2, name: "Mahima", userName: "mahima123" },
  {id:3, name:"Praveenraj",userName:"praveenraj123"},
  ];
  Form = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
  });
  updateid: any;
  get name() {
    return this.Form.get('name')!;
  }
  get userName() {
    return this.Form.get('userName')!;
  }

  constructor() { }

  ngOnInit(): void {
  }


  
  edit(row:any)
  {
    console.log(row);
    
    this.updateid=row.id
    this.editable=true;
    this.Form.controls['name'].setValue(row.name)
    this.Form.controls['userName'].setValue(row.userName)
  }
  update()
  {
    if(this.userdata.length && this.Form.value.userName){

        this.userdata[this.updateid].name=this.Form.value.name,
        this.userdata[this.updateid].userName=this.Form.value.userName
     alert("updated successfully");
      this.Form.reset();
    }
  }


    

  add()
  {
   
    if(this.userdata.length && this.Form.value.userName){
      this.userdata.push({
        id: this.userdata.length,
        name: this.Form.value.name,
        userName:this.Form.value.userName
      })
      alert("Added successfully")
      this.Form.reset();
    }
    
  }
  delete(row:any)
  {
    this.updateid=row.id
  }
  remove()
  {
    this.userdata.splice(this.updateid,1)
  }
  reset()
  {
    this.editable=false;
    this.Form.reset();
  }
}
