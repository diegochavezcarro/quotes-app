import { Quote } from './../../data/quote.interface';
import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private quotesService: QuotesService) {
  }

  ionViewWillEnter() {
    this.quotes=this.quotesService.getFavoriteQuotes();
  }

}
