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
  router:any;
  activateroute:any;
  submitted1 = false;

  stu1={oldpass:'',newpass:'',confirmpass:''};

  constructor(private fb:FormBuilder,_r:Router,_a:ActivatedRoute) {
    this.router = _r;
    this.activateroute = _a;
  }

  ngOnInit(): void {
    this.pwd = this.fb.group({
      
      oldpass:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")]],
      newpass:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")]],
      confirmpass:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")]]
    }, {
      validator: this.MustMatch('newpass', 'confirmpass')
  });
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    } 
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

    if(this.stu1.newpass!=this.stu1.confirmpass)
    {
      return;
    }

    alert("Password update successfully");
    this.router.navigateByUrl("/updateprofile");
 
  }

  visible:boolean = true;
  changetype:boolean =true;

  viewpass1()
  {
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