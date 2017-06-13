import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from '../../data/quote.interface'
import quotes from '../../data/quotes';
import {QuotesPage} from '../quotes/quotes'

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  quoteCollection: {category:string, quotes: Quote[], icon:string}[];
  quotesPage = QuotesPage;
  ngOnInit(){
    this.quoteCollection=quotes;
  }

}
