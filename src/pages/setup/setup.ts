import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
/**
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
})
export class SetupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  rootPage:any = PerfilPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupPage');
  }

  openPage(parametro){
  	console.log(parametro);
  	this.navCtrl.push(parametro);
  }


}
