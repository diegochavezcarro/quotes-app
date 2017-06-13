import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface'
@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: { category: string, quotes: Quote[]; icon: string };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
/*
//use elvis operator (?) in template to use this approach
//quoteGroup?.category
//angular carga el template antes de este metodo.
  ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;
  }
*/
}
