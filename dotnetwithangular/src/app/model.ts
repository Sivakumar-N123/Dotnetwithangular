export class Product {
    public ID: number | undefined;
    public SpecificationName = '';
   
}

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


