import { Component, OnInit } from '@angular/core';
import {RestService} from '../../rest.service';
import {Udata} from '../../udata';
import {Response} from '@angular/http/src/static_response';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private ob1:RestService) { }
  users: Udata[]=[];
  disp:boolean=false;
  disp1:boolean=false;
  disp2:boolean=false;
  disp3:boolean=false;
  disp4:boolean=false;
  udata : Udata ={"id":0,"password":"","role":"","contact":0,"salary":0,"name":"" }
  id:number;
  ngOnInit() {
  }
  getdata()
  {
    this.ob1.getUsers()
    .subscribe(
      (response:any)=> this.users = response
    )
    this.disp=true;
  }
  update()
  {
    this.disp1=true;
  }
  updateMy()
  {
    this.disp2=true;
  }
  insert()
  {
    this.disp3=true;
  }
  delete()
  {
    this.disp4=true;
  }
  updateData(id,name,role,contact,salary)
  {
      this.ob1.getdata(id)
      .subscribe(
        (response:Response)=>
        {this.udata= response.json(),
        console.log(this.udata.password+" "+this.udata.id+" "+this.udata.role+" "+this.udata.salary+" "+this.udata.name);
     
        
        this.udata.name=name;
        this.udata.role=role;
        this.udata.contact=contact;
        this.udata.salary=salary;
      let user1= new Udata(this.udata.id,this.udata.password,this.udata.role,this.udata.contact,this.udata.salary,this.udata.name);
      this.ob1.postUser(id,user1)
      .subscribe(
      (response:any)=>console.log("update successfully")
    )
  }
      )

  }
  updateUData(contact,name,password,salary)
  {
    this.id=this.ob1.eid;
    this.ob1.getdata(this.id)
      .subscribe(
        (response:Response)=>
        {this.udata= response.json(),
        console.log(this.udata.password+" "+this.udata.id+" "+this.udata.role+" "+this.udata.salary+" "+this.udata.name);
      
      this.udata.contact=contact;
      this.udata.name=name;
      this.udata.password=password;
      this.udata.salary=salary;
      let user1= new Udata(this.udata.id,this.udata.password,this.udata.role,this.udata.contact,this.udata.salary,this.udata.name);
      this.ob1.postUser(this.id,user1)
      .subscribe(
      (response:any)=>console.log("update successfully"))
    }
    )
    
  }

  insertData(id,name,password,role,contact,salary)
  {
    this.udata.id=id;
    this.udata.name=name;
    this.udata.password=password;
    this.udata.role=role;
    this.udata.contact=contact;
    this.udata.salary=salary;
    let user1= new Udata(this.udata.id,this.udata.password,this.udata.role,this.udata.contact,this.udata.salary,this.udata.name);
    this.ob1.postUse(user1)
    .subscribe(
    (response:any)=>console.log("update successfully")
  )
  }


  deleteItem(id)
  {
    this.ob1.deleteUser(id)
    .subscribe(
      (response:any)=> console.log("Deleted")
    )
  }
}
