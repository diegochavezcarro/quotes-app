import { SettingsPage } from './../pages/settings/settings';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  tabsPage:any = TabsPage;
  settingsPage:any = SettingsPage;
  //para usar dsps d q se inicializa el template
  @ViewChild('nav') nav: NavController;
  //correccion de un usuario de udemy,yo preferi corregirlo
  //en el constructor
  //menuCtrl: MenuController;

//para el ej del side menu no se puede inyectar el navcontroller, 
//aun no se inicializo el stack de paginas
  constructor(platform: Platform, statusBar: StatusBar, 
      splashScreen: SplashScreen, private menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //correccion de un usuario de udemy
      //this.menuCtrl=menuCtrl;
    });    
  }
//reemplazo la root page
  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

