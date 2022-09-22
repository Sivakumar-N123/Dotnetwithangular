export class Product {
    public ID: number | undefined;
    public SpecificationName = '';
   
}

export interface data {
    CourseID: number | undefined;
    CourseName:string;
   
}

export interface userData{
    id?:Number,
    userName:string,
    email:string,
    password?:string,
    isStudent?:boolean,
    isActive?:boolean
  }


