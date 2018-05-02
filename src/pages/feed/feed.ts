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
 	public lastPage:number;
 	public infiniteScroll;
 	private voltaDetalhes:boolean=false;

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
 		this.page=1;
 		this.refresher=refresher;
 		this.carregaFilmes();

 	}


  ionViewDidEnter() { //'Entrer' para carregar os filmes sempre que entrar. o'Load' carrega so uma vez
  //this.page=1;  
  this.carregaFilmes();
  this.lastPage=this.page;

  this.voltaDetalhes = false;
}

carregaFilmes(){
	if (this.voltaDetalhes || this.lastPage== this.page){}else{
		this.iniciaLoad();
		this.movieProvider.getPopularMovies(this.page).subscribe(
			data => {
				const response = (data as any);
				const resposta = JSON.parse(response._body);
				if (this.page>1){
					this.result=this.result.concat(resposta.results);
					this.infiniteScroll.complete();
					this.terminaLoad();
					if(this.refresher != null){ //para nao dar o .compete antes de ter algum dado na variavel, sem usar outra variavel para verificação
						this.refresher.complete();
						this.refresher = null;
					}
					console.log('Infinit Scroll CF'+ this.page);
				}else{					
					this.result=resposta.results;
					this.terminaLoad();
					console.log('Carrega Filmes'+ this.page);
					if(this.refresher != null){ //para nao dar o .compete antes de ter algum dado na variavel, sem usar outra variavel para verificação
						this.refresher.complete();
						this.refresher = null;
					}
				}
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
}


detalhes(id){
	this.navCtrl.push(FilmeDetalhesPage, id);
	this.voltaDetalhes = true;
}

doInfinite(infiniteScroll) {
	this.infiniteScroll = infiniteScroll;
	this.page++;
	console.log('Infinit Scroll'+ this.page);
	this.carregaFilmes();
}
}
