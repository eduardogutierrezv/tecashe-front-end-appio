import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

const headers = new HttpHeaders({
  'X-Api-key': ""
})

@Injectable({
  providedIn: 'root'
})



export class LoginService {

  url:string = "http://184.72.167.67:8080/auth/login";



  usuario = {
    email:"edu.gutierrez.valdes@gmail.com",
    password:"123456"
  }



  constructor(private _httpClient:HttpClient) { }


public postUsuario(){

  this._httpClient.post(this.url, this.usuario).subscribe(
    resp => {
      console.log(resp);
    }, error => {
      console.log(error);
    }
    );
}

}
