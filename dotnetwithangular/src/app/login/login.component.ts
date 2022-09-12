import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  stuform!:FormGroup;
  option1 =false;
  stu={pass:'',};
  
  router:any;
  activateroute:any;
  constructor(_r:Router,_a:ActivatedRoute) { 
    this.router = _r;
    this.activateroute = _a;
  }

  ngOnInit(): void {
    this.stuform = new FormGroup({
        pass: new FormControl(this.stu.pass, [
        Validators.minLength(8)
      ])
    });
  }

  log()
  {
    const checkbox = document.getElementById('subscribe',) as HTMLInputElement | null;
    if (checkbox?.checked)
    {
      console.log('Checkbox is checked');
    }
    else
    {
      console.log('Checkbox is NOT checked');
    }
    this.router.navigateByUrl('/update');
  } 

}
