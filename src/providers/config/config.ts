import { Injectable } from '@angular/core';

  let config_key = "config"; //variavel geral para o config

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: true,
    name:"",
    username:""
  }

  constructor() {
    console.log('Hello ConfigProvider');
  }


  getConfigData(): any{  //recupera os dados
    return localStorage.getItem(config_key)
  }

  setConfigData(showSlide?: boolean, name?: string, username?: string){ //grava os dados
    let config = {
        showSlide: false,
        name:"",
        username:""
    };
    
    if(showSlide){
      config.showSlide=showSlide;
    }

    if(name){
      config.name=name;
    }

    if(username){
      config.username=username;
    }

    localStorage.setItem(config_key,JSON.stringify(config))
  }
}
