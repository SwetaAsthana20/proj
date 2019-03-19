import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {Udata} from '../udata';
import {Response} from '@angular/http/src/static_response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ob1 : RestService) { }

  ngOnInit() {
  }
  id:number;
  disp:boolean=true;
  disp1:boolean;
  pwd:string;
  did:number;
  dpwd:string;
  role:string;
udata : Udata ={id:0,password:"",role:"",salary:0,contact:0,name:""}
  check(id,pwd,role)
  {
    this.id=id;
    this.pwd=pwd;
    this.role=role;
   this.getUdata(this.id);
  }
  getUdata(id)
  {
      this.ob1.getdata(id)
      .subscribe(
        (response:Response)=>{this.udata= response.json(),
          this.match();
        console.log(this.udata.password+" "+this.udata.id+" "+this.udata.role)
        },
        (error)=>{alert("authentication error:Username and password not matched")}
      )

  }
  match()
  {
      if(this.udata.password==this.pwd && this.udata.role==this.role)
      {
        alert("successful");
        this.disp=false;
        this.disp1=true;
      }
      else{
        alert("authentication error:Username and password not matched");
      }
  }
}
