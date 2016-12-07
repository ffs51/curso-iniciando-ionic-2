import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';
import {ModalLoginPage} from './../modal-login/modal-login'

/*
  Generated class for the ModalTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-test/modal-test.html',
})
export class ModalTestPage {
  constructor(private nav: NavController) {}

  openModal(){
    let modal = Modal.create(ModalLoginPage, {
      action: {
        test: 'Olá',
        value: true
      }
    });

    modal.onDismiss((parametro) => {
      console.log('Dados do usuário', parametro);
    })

    this.nav.present(modal);
  }


}
