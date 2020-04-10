import { Component, OnInit } from '@angular/core';
import { SupermarketService } from '../supermarket.service';
import { SuperMarket } from '../supermarket';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  supermarkets : SuperMarket [];

  constructor(private supermarketService: SupermarketService) { }

   ngOnInit() {
    this.getSupermarkets();
  }

  getSupermarkets(): void {
    this.supermarketService.getSuperMarkets()
      .subscribe(supermarkets => this.supermarkets = supermarkets.slice(1, 5));
  }
}