import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from '../../data/quote.interface'
import quotes from '../../data/quotes'
/**
 * Generated class for the LibraryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  quoteCollection: {category:string, quotes: Quote[], icon:string}[];

  ngOnInit(){
    this.quoteCollection=quotes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}
