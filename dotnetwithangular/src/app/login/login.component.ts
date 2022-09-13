import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  stuform!:FormGroup;
  option1 =false;
  stu={pass:'',name:'',email:''};
  
  router:any;
  activateroute:any;
  constructor(_r:Router,_a:ActivatedRoute) { 
    this.router = _r;
    this.activateroute = _a;
  }

  get name() {
    return this.stuform.get('name')!;
  }
  get pass() {
    return this.stuform.get('pass')!;
  }
  get email() {
    return this.stuform.get('email')!;
  }
  ngOnInit(): void {
    this.stuform = new FormGroup({
        pass: new FormControl(this.stu.pass, [
        Validators.minLength(8)
      ]),
      name: new FormControl(this.stu.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      email: new FormControl(this.stu.name, [
        Validators.required,
      ]),
    });
  }

  // log()
  // {
  //   const checkbox = document.getElementById('subscribe',) as HTMLInputElement | null;
  //   if (checkbox?.checked)
  //   {
  //     console.log('Checkbox is checked');
  //   }
  //   else
  //   {
  //     console.log('Checkbox is NOT checked');
  //   }
  //   this.router.navigateByUrl('/update');
  // } 



  public log(): void {
    console.log(this.stuform);
    if (this.stuform.invalid) {
      for (const control of Object.keys(this.stuform.controls)) {
        this.stuform.controls[control].markAsTouched();
      }
      return;
    }

    this.stuform = this.stuform.value;  
    
    
    // console.info('Email:', this.stuform.email);
    // console.info('Password:', this.stuform.pass);
  }

}
