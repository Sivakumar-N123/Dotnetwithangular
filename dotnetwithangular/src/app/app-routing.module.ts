import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SpecificationComponent } from './specification/specification.component';

const routes: Routes = [
  {path:"course",component:CourseComponent},
 { path:"admin",component:AdminComponent},
 {path:"login",component:LoginComponent},
 {path:"spec", component:SpecificationComponent}
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
