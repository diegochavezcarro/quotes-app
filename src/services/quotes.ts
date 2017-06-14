import { Quote } from './../data/quote.interface';
import { Injectable } from '@angular/core';


@Injectable()
export class QuotesService {
    private favoriteQuotes: Quote[] = [];
    
    constructor() { }

    addQuoteToFavorites(quote:Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote:Quote){
        const position = this.favoriteQuotes.findIndex((quoteEl:Quote)=>{
            return quoteEl.id==quote.id;
        });
        //opcion mas simple:
        //const position= this.favoriteQuotes.indexOf(quote);
        this.favoriteQuotes.splice(position,1);
    }

    getFavoriteQuotes(){
        //por las dudas retorna una copia del array asi no lo modifican dsd afuera
        return this.favoriteQuotes.slice();
    }
    
}