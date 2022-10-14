export interface specData {
     specificationId?: number | undefined,
     specificationName: string;
    }



export interface data {
    courseId?: number | undefined;
    courseName:string;
   
}

export interface userData{
    id?:Number,
    studentName:string,
    email:string,
    password?:string,
    isStudent?:boolean,
    isActive?:boolean,
    profileImage?:string,
    isVerify?:boolean
  }
 



  export interface specCoursedata{
    specCourseId : number;
    specCourseName:string;
  }


  