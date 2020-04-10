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

    this.messageService.add('MessageService: fetched supermarkets');
    return of(SUPERMARKETS);
  }

  getSuperMarket(id: number) : Observable <SuperMarket>{
  
    this.messageService.add('MessageService: fetched supermarket id=${id}');
    return of(SUPERMARKETS.find (supermarket => supermarket.id == id));
  }



}