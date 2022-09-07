import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {path:"course",component:CourseComponent},
 { path:"admin",component:AdminComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
