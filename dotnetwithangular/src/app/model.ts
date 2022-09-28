export interface specData {
     specificationId?: number | undefined,
     specificationName: string;}



export interface data {
    courseId?: number | undefined;
    courseName:string;
   
}

export interface userData{
    id?:Number,
    userName:string,
    email:string,
    password?:string,
    isStudent?:boolean,
    isActive?:boolean
  }

  export interface specdata{
    specCourseId : number;
    specCourseName:string;
  }

  export interface ProductCourse{
    courseId?:null;
    courseName?:string;


  }
  export interface ProductSpec{
    specId?:null;
    specName?:string;

  
  }

  export interface Product{
    ProductName:string;
    ProductID:null;
  }