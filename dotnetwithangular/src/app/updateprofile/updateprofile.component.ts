import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentAppserviceService } from '../Services/student-appservice.service';


@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  msg:any;
  router:any;
  activateroute:any;
  api:StudentAppserviceService;
  imageurl:string="/assets/images/images.jpg";
  filetoupload:File|any=null;
  profile!: FormGroup;
  det:any={email: "", id:"",isActive:"",isStudent:"",isVerify:"",password:"",profileImage:"",userName:""};
  profilename!:string;
  final_profile:string="";
  name1!:string[];
  imgtrue=true;
  
  constructor(r:Router,_a:ActivatedRoute,_api:StudentAppserviceService,private formbuilder:FormBuilder)
  {
    this.router = r;
    this.activateroute = _a;
    this.api=_api;

     this.profile = formbuilder.group({
      profileimage:new FormControl()
    })
  
  }

   

  ngOnInit(): void {
    this.msg = this.api.setValue();
    console.log(this.msg);
  

    this.getdata();
  }


  getdata(){
    this.api.getuserbyemail(this.msg).subscribe((r:any)=>{
      this.det=r;
      console.log(this.det);

      if(r.profileImage==null)
      {
        
        this.profilename=this.det.userName;
      this.name1= this.profilename.split(' ');
  
      for(let i=0;i<this.name1.length;i++)
      {
        this.final_profile = this.final_profile + this.name1[i].charAt(0).toUpperCase();
      }

      console.log(this.final_profile);
      this.imgtrue=false;
    }
  })
  }

  imgupload(event:any)
  {


    if(((event.target.files[0].type=="image/jpeg")||(event.target.files[0].type=="image/png")))
    {

      if((event.target.files[0].size<=5428800))
      {
        console.log(event.target.files[0].size);
        this.filetoupload = event.target.files[0];
        console.log(this.filetoupload);
    
        var reader = new FileReader();
        reader.onload=((event:any)=>{
          this.imageurl = event.target.result;
        })
        reader.readAsDataURL(this.filetoupload);
        this.imgtrue=true;
      }

      else
      {
        this.profile.reset();
        alert("Image is less than 5 Mb ...");
      }
        

    
  }
    else
    {
      this.imageurl="/assets/images/Capture.png";
      this.profile.reset();

      alert("Please select images ...");
      
    }
      
    
  }

 

}
 