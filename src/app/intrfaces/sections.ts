export  interface Sections {
Realistic:number
Investigative:number
Artistic:number
Social:number
Enterprising:number
Conventional:number
}

export interface top3srctions{
     firstSection:string
     secondSection:string
     thirdSection:string
}

export interface student{
     Name:string,
     age:number,
     phone:string,
     email:string,
     gender:string,
     grade:string,
     school:string,
     location:string,
}

export interface result{
     highest:string,
     second:string,
     third:string,
     studentID:string
}

export interface students{
     id:string,
     name:string,
     age:number,
     phone:string,
     email:string,
     gender:string,
     grade:string,
     school:string,
     location:string,
     result:{
          id:number,
          highest: string,
          second: string,
          third: string,
          studentID: string
     }
}
