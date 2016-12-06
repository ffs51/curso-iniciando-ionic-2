import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ListTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/list-test/list-test.html',
})
export class ListTestPage {

  colecionadores: Array<{nome:string,caminhoAvatar:string}>;


  constructor(private nav: NavController) {
    this.colecionadores = [
      {nome:'Sheldon', caminhoAvatar:'./../../images/colecionadores/sheldon.jpg'},
      {nome:'Henrique César', caminhoAvatar:'./../../images/colecionadores/henrique.jpg'}
    ]


  }
}
