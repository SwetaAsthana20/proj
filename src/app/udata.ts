export class Udata
{
    id:number;
    password:string;
    role:string;
    contact:number;
    salary:number;
    name:string;
    constructor(id:number,password:string,role:string,contact:number,salary:number,name:string)
    {
        this.id=id;
        this.password=password;
        this.role=role;
        this.contact=contact;
        this.name=name;
        this.salary=salary;

    }
}