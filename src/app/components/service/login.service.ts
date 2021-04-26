import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Login } from '../interface/login.interface';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { environment } from 'src/environments/environment';
import { LoginUsersend } from '../interface/user.send.login.interface';

const headers = new HttpHeaders({
  'X-Api-key': ""
})

const URL = `${environment.protocolo}${environment.url}${environment.port}`

@Injectable({
  providedIn: 'root'
})



export class LoginService {


  token:string = '';


  constructor(private _httpClient:HttpClient, private _storageNative:NativeStorage) { }


public postUsuario(userSend:LoginUsersend){
  let urlLogin = URL+"/auth/login";

    return new Promise( resolve => {

      this._httpClient.post<Login>(urlLogin, userSend).subscribe(
        resp => {
         this.guaredarToken(resp.body?.accessToken);

         if(resp.code==200){
          resolve(true);
         }else{
          this._storageNative.clear();
          resolve(false);
         }
       }
     );

    } );

  //return this._httpClient.post<Login>(urlLogin, userSend).toPromise();

  }

    private guaredarToken(token:string) {

    this.token = token;
    this._storageNative.setItem('token', token);
    console.log(token);
  }
}
