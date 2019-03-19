import { Component, OnInit } from '@angular/core';
import {RestService} from '../../rest.service';
import {Udata} from '../../udata';
import {Response} from '@angular/http/src/static_response';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private ob1:RestService) { }
 udata : Udata ={"id":0,"password":"","role":"","contact":0,"salary":0,"name":"" }
 users : Udata []=[];
 disp:boolean=false;
 disp1:boolean=false;
  ngOnInit() {
  }

  getUdata()
  {
    this.ob1.getUsers()
    .subscribe(
      (response:any)=> this.users = response
    )
    this.disp=true;
  }
  
  getid()
  {
    this.disp1=true;
  }

  getInfo(id,amount)
  {
      this.ob1.getdata(id)
      .subscribe(
        (response:Response)=>{this.udata= response.json(),
        console.log(this.udata.password+" "+this.udata.id+" "+this.udata.role+" "+this.udata.salary+" "+this.udata.name);
         console.log(this.udata.salary);
       this.udata.salary=this.udata.salary+eval(amount);
       console.log(this.udata.salary);
      let user1= new Udata(this.udata.id,this.udata.password,this.udata.role,this.udata.contact,this.udata.salary,this.udata.name);
    this.ob1.postUser(id,user1)
    .subscribe(
      (response:any)=>console.log("update successfully")
    )
        }
      ) 
  }
}
