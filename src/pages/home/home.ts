import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ 
    ConfigProvider
    ],
})
export class HomePage {
public tugle: any = {teste:true}

  constructor(public navCtrl: NavController,
  			  public configProviver: ConfigProvider) {
  }

clica (val : boolean){

}


public checkConfig(){
	let config: any = this.configProviver.getConfigData();
	config=config.showSlide;

	if (config == false){
		console.log('if ' + config);

		this.configProviver.setConfigData(true);

	}else{
		this.configProviver.setConfigData(false);
		console.log('else ' + config);
	}
}


public variavel:number = 1040;
}
