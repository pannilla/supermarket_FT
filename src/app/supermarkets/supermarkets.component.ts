import { Component, OnInit } from '@angular/core';
import {SuperMarket} from '../supermarket'
import {SUPERMARKETS} from '../supermarkets_list'

@Component({
  selector: 'app-supermarkets',
  templateUrl: './supermarkets.component.html',
  styleUrls: ['./supermarkets.component.css']
})
export class SupermarketsComponent implements OnInit {

  supermarkets = SUPERMARKETS;
  selectedSuperMarket: SuperMarket;

  constructor() { }

  ngOnInit() {
  }

  onSelect(supermarket: SuperMarket): void {
    this.selectedSuperMarket = supermarket;
  }

}