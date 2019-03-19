import { Component, OnInit } from '@angular/core';
import {RestService} from '../../rest.service';
import {Udata} from '../../udata';
import {Response} from '@angular/http/src/static_response';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private ob1:RestService) { }

  udata:Udata ={"id":0,"password":"","role":"","contact":0,"salary":0,"name":"" }
  id:number;
  disp:boolean=false;
  disp1:boolean=false;
  ngOnInit() {
  }
  getdata()
  {
    this.disp=true;
    this.id=this.ob1.eid;
    this.ob1.getdata(this.id)
    .subscribe(
      (response:Response)=>
      {this.udata= response.json(),
      console.log(this.udata.password+" "+this.udata.id+" "+this.udata.role+" "+this.udata.salary+" "+this.udata.name);
      }
    )
  }
  update()
  {
    this.disp1=true;
  }
  updateData(contact,name,pwd)
  {
    this.getdata();
    this.udata.password=pwd;
    this.udata.name=name;
    this.udata.contact=contact;

    let user1= new Udata(this.udata.id,this.udata.password,this.udata.role,this.udata.contact,this.udata.salary,this.udata.name);
    this.ob1.postUser(this.id,user1)
    .subscribe(
      (response:any)=>console.log("update successfully")
    )
  }
}
