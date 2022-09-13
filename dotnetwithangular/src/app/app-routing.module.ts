import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SpecificationComponent } from './specification/specification.component';
import { UserComponent } from './user/user.component';
import { UpdatepwdComponent } from './updatepwd/updatepwd.component';

let routes: Routes = [
  {path:"course",component:CourseComponent},
 {path:"admin",component:AdminComponent},
 {path:"",component:LoginComponent},
 {path:"spec", component:SpecificationComponent},
 {path:"user", component:UserComponent},
 {path:"login",component:LoginComponent},
 {path:"update",component:UpdatepwdComponent} 
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
