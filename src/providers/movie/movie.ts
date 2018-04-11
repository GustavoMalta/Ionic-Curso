
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/* import 'rxjs/add/operator/map'; vai precisar disso ainda
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  girolete@hotmail.com

  Chave da API (v3 auth)

bbab2f99d4a8e2d9b74c77a89e7941f1

Token de Leitura da API (v4 auth)

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmFiMmY5OWQ0YThlMmQ5Yjc0Yzc3YTg5ZTc5NDFmMSIsInN1YiI6IjVhYzdiOTQ4OTI1MTQxNjJiMTAyOWZjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQix0gMj1Gr674JuwN4Pm0A0DVUf6FJ2-KQDuUIjuf8

Solicitação de exemplo de API

https://api.themoviedb.org/3/movie/550?api_key=bbab2f99d4a8e2d9b74c77a89e7941f1

*/
@Injectable()
export class MovieProvider {
	private apiPath = "https://api.themoviedb.org/3";
	private apiKey = "bbab2f99d4a8e2d9b74c77a89e7941f1";


  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
  	return this.http.get(this.apiPath + "/movie/latest?api_key=" + this.apiKey + '&language=pt-BR');
  }


}
