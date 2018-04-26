import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie'

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-filme-detalhes',
 	templateUrl: 'filme-detalhes.html',
 	providers: [ MovieProvider ],
 })
 export class FilmeDetalhesPage {

 	public filme = null;
 	public detalhe: any= {};
 	public generos: any={}
;
 	constructor(public navCtrl: NavController, 
 		public navParams: NavParams,
 		public movieProvider: MovieProvider
 		) {
 	}

 	ionViewDidEnter() {
 		
 		this.movieProvider.getMovieDetails(this.navParams.data).subscribe(
 			data => {
 				const response = (data as any);
 				const resposta = JSON.parse(response._body);
 				this.detalhe=resposta;
 				console.log(this.detalhe);
 			}, error =>{
 				console.log(error);
 			}
 			)

 		console.log('ionViewDidLoad FilmeDetalhesPage');
 	}

 }
