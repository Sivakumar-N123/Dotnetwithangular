import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  stu={pass:'',username:''};
  logform!:FormGroup;
  submitted = false;
  router:any;
  activateroute:any;

  constructor(private fb:FormBuilder,_r:Router,_a:ActivatedRoute)
  {
    this.router = _r;
    this.activateroute = _a;
  
  }

  ngOnInit(): void {
    this.logform = this.fb.group({
      username:['',[Validators.required]],
      pass:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")]]
    })
  }

  onsubmit()
  {
    this.submitted = true;

    const checkbox = document.getElementById('subscribe') as HTMLInputElement | null;
    if (checkbox?.checked)
    {
      console.log('Checkbox is checked');
    }
    else
    {
      console.log('Checkbox is NOT checked');
    }

    this.stu =this.logform.value;


    if(this.logform.invalid)
    {
      return;
    }

    alert("login successfully");

    // this.router.navigateByUrl("/update");
    this.router.navigate([this.stu.username],{relativeTo:this.activateroute})
  }

  visible:boolean = true;
  changetype:boolean =true;

  viewpass()
  {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}