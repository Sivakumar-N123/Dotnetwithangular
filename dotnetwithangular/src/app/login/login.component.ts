import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonThemeColor } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  stuform!:FormGroup;
  option1 =false;
  stu={pass:'',name:''};
    
  router:any;
  activateroute:any;
  constructor(_r:Router,_a:ActivatedRoute) { 
    this.router = _r;
    this.activateroute = _a;
  }

  get pass() {
    return this.stuform.get('pass');
  }
  get name() {
    return this.stuform.get('name');
  }
  ngOnInit(): void {
    this.stuform = new FormGroup({
           pass: new FormControl(this.stu.pass, [
        Validators.minLength(8)
      ]),
      name: new FormControl(this.stu.name, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
      ]),

    });
  }

  log()
  {
    // const checkbox = document.getElementById('subscribe',) as HTMLInputElement | null;
    // if (checkbox?.checked)
    // {
    //   console.log('Checkbox is checked');
    // }
    // else
    // {
    //   console.log('Checkbox is NOT checked');
    // }
    
    this.stu =this.stuform.value;
    console.log(this.stu.pass);
    console.log(this.stu.name);
  } 
}