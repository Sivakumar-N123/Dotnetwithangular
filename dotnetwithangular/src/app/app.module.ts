import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SpecificationComponent } from './specification/specification.component';
import { UserComponent } from './user/user.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule, InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from "@progress/kendo-angular-label";
import { PopupModule } from '@progress/kendo-angular-popup';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { UpdatepwdComponent } from './updatepwd/updatepwd.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { HttpClientModule } from '@angular/common/http';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { SpeccourseComponent } from './speccourse/speccourse.component';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudenttileComponent } from './studenttile/studenttile.component';
import { CourseselectionComponent } from './courseselection/courseselection.component';
import { DialogsModule, WindowModule } from '@progress/kendo-angular-dialog';







@NgModule({
  declarations: [
    AppComponent,
    CourseComponent, 
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    SpecificationComponent,
    UserComponent,
    UpdatepwdComponent,
    UpdateprofileComponent,
    SpeccourseComponent,
    DashboardComponent,
    StudenttileComponent,
    CourseselectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LabelModule,
    FormFieldModule,
    InputsModule,
    DateInputsModule,
    PopupModule,
    ReactiveFormsModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    LayoutModule,
    HttpClientModule,
    DropDownsModule,
    DialogsModule,
    WindowModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
