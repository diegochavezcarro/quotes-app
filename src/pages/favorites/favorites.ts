import { SettingsService } from './../../services/settings';
import { QuotePage } from './../quote/quote';
import { Quote } from './../../data/quote.interface';
import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      //si se da click en no, da false. Click afuera da null.
      //click en sida true.
      //console.log(remove);
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
    //no existen estos hooks en nuevas versiones
    /*modal.willLeave.subscribe(
      (remove:boolean)=>console.log(remove)
    );*/
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    //si se quiere recargar todo devuelta:
    //this.quotes=this.quotesService.getFavoriteQuotes();
    //alternativa si se quiere borrar sin recargar todo:
    const position = this.quotes.indexOf(quote);
    this.quotes.splice(position, 1);
  }
  /*
  //se reemplaza con la directiva menuToggle
  onOpenMenu(){
    this.menuCtrl.open();
  }
  */

  getBackground() {
    return this.settingsService.isAltBackground()
      ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground() {
    return this.settingsService.isAltBackground();
  }

}
