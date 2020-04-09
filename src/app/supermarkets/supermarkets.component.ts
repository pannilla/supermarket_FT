import { Component, OnInit } from '@angular/core';
import {SuperMarket} from '../supermarket'
import {SUPERMARKETS} from '../supermarkets_list'
import {SupermarketService} from '../supermarket.service';

@Component({
  selector: 'app-supermarkets',
  templateUrl: './supermarkets.component.html',
  styleUrls: ['./supermarkets.component.css']
})
export class SupermarketsComponent implements OnInit {

  supermarkets : SuperMarket [];
  selectedSuperMarket: SuperMarket;

  constructor(private supermarketService : SupermarketService) { }

  ngOnInit() {
    this.getSupermarkets()
  }

  getSupermarkets(): void {
    this.supermarketService.getSuperMarkets()
        .subscribe (supermarkets => this.supermarkets = supermarkets)
  }

  onSelect(supermarket: SuperMarket): void {
    this.selectedSuperMarket = supermarket;
  }

}