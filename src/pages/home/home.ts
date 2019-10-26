import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    //this.navCtrl.push('CategoriasPage'); //navega de uma página para outra, colocar a seta de voltar na toolbar
    this.navCtrl.setRoot('CategoriasPage');
  }

}
