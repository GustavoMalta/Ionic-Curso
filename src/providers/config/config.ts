import { Injectable } from '@angular/core';

  let config_key = "config"; //variavel geral para o config
  let slide = '';

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: "",
    name:"",
    username:""
  }

  constructor() {
    console.log('Hello ConfigProvider');
  }


  getConfigData(){  //recupera os dados
    return localStorage.getItem(config_key);
  }

  setConfigData(showSlide?: boolean ){//name?: string, username?: string){ //grava os dados
    
    //this.config.showSlide=showSlide
//
    let config = {
      showSlide:showSlide,
      name:"",
      username:""
    };

    /*
    config.showSlide=showSlide;
    
    if(showSlide){
      config.showSlide=showSlide;
    }

    if(name){
      config.name=name;
    }

    if(username){
      config.username=username;
    }*/

    localStorage.setItem(config_key,JSON.stringify(config));
    localStorage.setItem(slide,'false');
  }
}
