import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SpecificationComponent } from './specification/specification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormFieldModule, InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from "@progress/kendo-angular-label";
import { PopupModule } from '@progress/kendo-angular-popup';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { UpdatepwdComponent } from './updatepwd/updatepwd.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent, 
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    SpecificationComponent,
    UserComponent,
    UpdatepwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LabelModule,
    ButtonsModule,
    GridModule,
    FormFieldModule,
    InputsModule,
    DateInputsModule,
    PopupModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
