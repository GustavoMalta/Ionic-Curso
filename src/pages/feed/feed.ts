import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-feed',
 	templateUrl: 'feed.html',
 	providers: [ MovieProvider ],
 })
 export class FeedPage {

 	public objeto_feed = {
 		titulo: 'Clint Estwood',
 		data: 'November 5, 1985',
 		descricao: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
 		likes: 42,
 		coments: 99,
 		hora_coment: "13h Ago"

 	}

 	constructor(
 		public navCtrl: NavController, 
 		public navParams: NavParams,
 		private movieProvider: MovieProvider,
 		public loadingCtrl: LoadingController
 		) {
 	}

 	public result: any;
 	public loader: any;
 	public refresher = null;
 	public page:number =1;
 	public infiniteScroll;

 	iniciaLoad() {
 		this.loader = this.loadingCtrl.create({
 			content: "Carregando Filmes..."
 		});
 		this.loader.present();
 	}
 	terminaLoad(){
 		this.loader.dismiss();
 	}

 	doRefresh(refresher) {
 		this.refresher=refresher;
 		this.carregaFilmes();

 	}

  ionViewDidEnter() { //'Entrer' para carregar os filmes sempre que entrar. o'Load' carrega so uma vez
  this.page=1;
  this.result=null;
  this.carregaFilmes();
}

carregaFilmes(){
	this.iniciaLoad();
	this.movieProvider.getPopularMovies(this.page).subscribe(
		data => {
			const response = (data as any);
			const resposta = JSON.parse(response._body);
			//if(infinitPage){
				
				if (this.page>1){
					this.result=this.result.concat(resposta.results);
					this.infiniteScroll.complete();
					this.terminaLoad();
				}else{
					this.result=resposta.results;
					this.terminaLoad();
					if(this.refresher != null){ //para nao dar o .compete antes de ter algum dado na variavel, sem usar outra variavel para verificação
						this.refresher.complete();
						this.refresher = null;
					}
				}
		/*	}else{
				this.result=resposta.results;
				console.log("teste");
			}
			console.log(this.result);
			this.terminaLoad();
			if(this.refresher != null){ //para nao dar o .compete antes de ter algum dado na variavel, sem usar outra variavel para verificação
				this.refresher.complete();
				this.refresher = null;
			}*/
		},error =>{
			console.log(error);
			this.terminaLoad();
			if(this.refresher != null){ 
				this.refresher.complete();
				this.refresher = null;
			}
		}
		)
}


detalhes(id){
	this.navCtrl.push(FilmeDetalhesPage, id);
}

doInfinite(infiniteScroll) {
	this.infiniteScroll = infiniteScroll;
	this.page++;
	console.log('Begin async operation'+ this.page);
	this.carregaFilmes();
}
}
