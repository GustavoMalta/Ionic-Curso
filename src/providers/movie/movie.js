var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var MovieProvider = /** @class */ (function () {
    function MovieProvider(http) {
        this.http = http;
        this.apiPath = "https://api.themoviedb.org/3";
        this.apiKey = "bbab2f99d4a8e2d9b74c77a89e7941f1";
        console.log('Hello MovieProvider Provider');
    }
    MovieProvider.prototype.getLatestMovie = function () {
        return this.http.get(this.apiPath + "/movie/latest?api_key=" + this.apiKey + '&language=pt-BR');
    };
    MovieProvider.prototype.getPopularMovies = function () {
        return this.http.get(this.apiPath + "/movie/popular?api_key=" + this.apiKey + '&language=pt-BR');
    };
    MovieProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], MovieProvider);
    return MovieProvider;
}());
export { MovieProvider };
//# sourceMappingURL=movie.js.map