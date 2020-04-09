import { Injectable } from '@angular/core';
import { SuperMarket } from './supermarket';
import { SUPERMARKETS } from './supermarkets_list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SupermarketService {

  constructor() { }

  getSuperMarkets() : Observable<SuperMarket[]>{
    return of(SUPERMARKETS);
  }

}