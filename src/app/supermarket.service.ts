import { Injectable } from '@angular/core';
import { SuperMarket } from './supermarket';
import { SUPERMARKETS } from './supermarkets_list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})

export class SupermarketService {

  constructor(private messageService: MessageService) { }

  getSuperMarkets() : Observable <SuperMarket[]>{
    return of(SUPERMARKETS);
  }

  getSuperMarket(id: number) : Observable <SuperMarket>{

    return of(SUPERMARKETS.find (supermarket => supermarket.id == id));
  }



}