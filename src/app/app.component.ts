import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';

import { ConfigProvider } from '../providers/config/config';

@Component({
  templateUrl: 'app.html',
  providers: [ 
    ConfigProvider
    ]
})
export class MyApp {
  rootPage:any = IntroPage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              configProviver: ConfigProvider
              ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = configProviver.getConfigData();

      console.log('antes>'+config);

        if (config == null){
          this.rootPage = IntroPage;
          configProviver.setConfigData(false);
        }else{
          this.rootPage = TabsPage;
        }

      console.log('depois>'+config);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
