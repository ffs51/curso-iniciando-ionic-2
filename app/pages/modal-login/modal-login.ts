import { Component } from '@angular/core';
import { NavController,ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the ModalLoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-login/modal-login.html',
})
export class ModalLoginPage {

  user:any={};
  constructor(private nav: NavController,
  public view: ViewController,
  public params: NavParams) {

    console.log('Dados recebidos da tela anterior',params.get('action'));
}

  logar(){
    this.view.dismiss(this.user);
  }

  close(){
    this.view.dismiss();
  }
}
