import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import {AlertController} from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: { category: string, quotes: Quote[]; icon: string };
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private alertCtrl:AlertController,
    private quotesService: QuotesService) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
  onAddToFavorite(selectedQuote:Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure',
      message: 'Are you sure you want to add the quote',
      //buttons: ['Ok']
      buttons:[
        {
          text: 'Yes, go ahead',
          handler: ()=> {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind',
          role: 'cancel', //si clickeamos afuera va a llamar tmb al handler
          handler: ()=> {
            console.log('Canceled!');
          }
        }
      ]
    });
    alert.present();
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
