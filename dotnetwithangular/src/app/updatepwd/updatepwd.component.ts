import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatepwd',
  templateUrl: './updatepwd.component.html',
  styleUrls: ['./updatepwd.component.css']
})
export class UpdatepwdComponent implements OnInit {

  pwd!:FormGroup;
  submitted1 = false;

  stu1={oldpass:'',newpass:'',confirmpass:''};


  constructor(private fb:FormBuilder)
  {

  }
  ngOnInit(): void {
    this.pwd = this.fb.group({
      
      oldpass:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
      newpass:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
      confirmpass:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]]
    })
  }

  onsubmit(){
    this.submitted1 = true;

      this.stu1 =this.pwd.value;
    console.log(this.stu1.oldpass);
    console.log(this.stu1.newpass);
    console.log(this.stu1.confirmpass);

    if(this.pwd.invalid)
    {
      return;
    }

    alert("login successfully");
 
  }

  visible:boolean = true;
  changetype:boolean =true;

  viewpass1(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }



  visible1:boolean = true;
  changetype1:boolean =true;

  viewpass2(){
    this.visible1 = !this.visible1;
    this.changetype1 = !this.changetype1;
  }

  visible2:boolean = true;
  changetype2:boolean =true;

  viewpass3(){
    this.visible2 = !this.visible2;
    this.changetype2 = !this.changetype2;
  }
}
