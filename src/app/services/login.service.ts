import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:string="amol";
  password:string="123"

  constructor() { }


  set(data:any){
    if(data.user==this.user && data.password == this.password){
      this.setLocaldata();
    }
  }

  //Loacal storage function

  setLocaldata(){
    localStorage.setItem("key","amol123");
  }

  getLocaldata(){
    return (localStorage.getItem("key"));
  }

  

}
