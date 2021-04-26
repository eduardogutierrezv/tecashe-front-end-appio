import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { Login } from '../../interface/login.interface';
import { LoginService } from '../../service/login.service';

import { LoginUsersend } from '../../interface/user.send.login.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild("slidesBlock", {static:true}) slides:IonSlides;

  login:Login;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];

  avatarSlide = {

      slidesPerView: 3.5

  };


  usuarioLoginSend:LoginUsersend = {
      email:"",
      password:""
  }


  constructor(private _loginService:LoginService, private _navCtrl:NavController) {

  }

  ngOnInit() {

    this.slides.lockSwipes(true);
  }
  //METODO DE IONIC AL INICIAR DESPUES DEL CONSTRUCTOR
  ionViewDidEnter() {
    //SE PUEDE USAR CUANDO EL VIEWCHILD NO ESTA COMO ESTATICO
    //this.slides.lockSwipes(true);
  }

  public async loginUser(fLogin:NgForm){

    if(fLogin.invalid){
      return ;
    }

    let valido = await this._loginService.postUsuario(this.usuarioLoginSend);

    console.log(valido)

    if(valido){
      //navegar a la vista
      this._navCtrl.navigateRoot('/main/tabs/tab1', {animated:true})
    }else {

    }

/*      this._loginService.postUsuario(this.usuarioLoginSend).then(
        resp =>{
          this.login = resp;
          console.log(resp);
        },
        error => {
          alert("error" + error)
        }) */
  }


  public registerUser(registerUser:NgForm){
      console.log(registerUser);
  }

  public selectionAvatar(avatar){
    this.avatars.forEach(avatars => {
      avatars.seleccionado = false;
    });

    avatar.seleccionado = true;
  }


  public moverLogin(){
      this.slides.lockSwipes(false);
      this.slides.slideTo(0);
      this.slides.lockSwipes(true);
  }

  public moverRegistrar(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

}
