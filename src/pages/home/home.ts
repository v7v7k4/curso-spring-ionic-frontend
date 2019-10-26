import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController, private menu: MenuController) {

  }

  login() {
    //this.navCtrl.push('CategoriasPage'); //navega de uma página para outra, colocar a seta de voltar na toolbar
    console.log(this.creds);
    this.navCtrl.setRoot('CategoriasPage');
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

}
