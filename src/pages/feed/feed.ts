import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  	private movieProvider: MovieProvider
  	) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
								data => {
									const resposta = JSON.parse((data as any)._body);
									console.log(resposta);
									 }, error =>{
									 	console.log(error);
									 }
								)
  }
}
