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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule, InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from "@progress/kendo-angular-label";
import { PopupModule } from '@progress/kendo-angular-popup';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { UpdatepwdComponent } from './updatepwd/updatepwd.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';






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
    LabelModule,
    FormFieldModule,
    InputsModule,
    DateInputsModule,
    PopupModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    BrowserAnimationsModule,
    GridModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
