import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SpecificationComponent } from './specification/specification.component';
import { UserComponent } from './user/user.component';
import { UpdatepwdComponent } from './updatepwd/updatepwd.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { SpeccourseComponent } from './speccourse/speccourse.component';
import { CourseselectionComponent } from './courseselection/courseselection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path:'',
  runGuardsAndResolvers:'always',
  canActivate:[AuthGuard],
  children:[  
    {path:"course",component:CourseComponent},
    {path:"speccourse",component:SpeccourseComponent},
    {path:"courseselection",component:CourseselectionComponent},
    {path:"updateprofile",component:UpdateprofileComponent},
    {path:"spec",component:SpecificationComponent},
    {path:"dashboard", component:DashboardComponent},
    {path:"user", component:UserComponent},]
  },


 {path:"login",component:LoginComponent},
 {path:"update",component:UpdatepwdComponent},
 {path:":value",component:UpdateprofileComponent},
 {path:"updateprofile",component:UpdateprofileComponent},
 {path:"",component:LoginComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
