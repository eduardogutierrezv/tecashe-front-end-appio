import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _loginService:LoginService) { }

  ngOnInit() {

    this._loginService.postUsuario();

  }

}
