import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http/src/static_response';
import {Udata} from './udata';
import 'rxjs/rx';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  eid:number;
  url:string ="http://localhost:3000/udata/";
  constructor(private http:Http) { }

  getdata(id) 
  {
    this.eid=id;
    return this.http.get(this.url+id)
    .map((response:any)=> response)
  }

  getUsers()
  {
    return this.http.get(this.url)
    .map((response:Response)=>response.json())

  }
  postUser(id,udata:Udata)
  {
   return  this.http.put(this.url+id ,udata)
    .map((response:any)=>response)
  }
  postUse(udata:Udata)
  {
    return  this.http.post(this.url ,udata)
    .map((response:any)=>response)
  }
  deleteUser(id) 
  {
    return this.http.delete(this.url+id)
    .map((response:any)=> response)
  }
}
