import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CardTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/card-test/card-test.html',
})
export class CardTestPage {

barraBotoes: Array<{posicao:string,  tipoBotao:string,nomeIcone:string,
  nomeBotao:string,clear:string}>;


  constructor(private nav: NavController) {

    this.barraBotoes = [
      {posicao:'',tipoBotao:'small',nomeIcone:'star',
      nomeBotao:'Favorito',clear:'true'},
      {posicao:'text-center',tipoBotao:'small',nomeIcone:'musical-notes',
      nomeBotao:'Escutar',clear:'true'},
      {posicao:'text-right',tipoBotao:'small',nomeIcone:'share',
      nomeBotao:'Compartilhar',clear:'true'}
    ]

  }
}
