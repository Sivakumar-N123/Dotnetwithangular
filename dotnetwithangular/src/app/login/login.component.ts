import { Component,  OnInit,  } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentAppserviceService } from '../Services/student-appservice.service';


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

  constructor(private fb:FormBuilder,_r:Router,_a:ActivatedRoute,private studentAppserviceService:StudentAppserviceService)
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
    console.log(this.logform.value.username);
    this.studentAppserviceService.getuserbyemail(this.logform.value.username).subscribe((r:any)=>{
      console.log(r)
      if((r!=null)&&(r.password==this.logform.value.pass))
      {
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

              else
              {
                alert("login successfully");
              this.studentAppserviceService.putValue(this.logform.value.username);
              this.router.navigateByUrl('/dashboard')
              
              }
              
      }
    else
    {
      this.stu =this.logform.value;
      sessionStorage.clear();
      alert("Invalid username or password");
    }
    

   })
  }

  visible:boolean = true;
  changetype:boolean =true;

  viewpass()
  {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}