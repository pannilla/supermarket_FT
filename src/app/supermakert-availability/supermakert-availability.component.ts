import { Component, OnInit, Input } from '@angular/core';
import { SuperMarket } from '../supermarket'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {SupermarketService} from '../supermarket.service';
import {FirebaseService} from '../firebase.service'

@Component({
  selector: 'app-supermakert-availability',
  templateUrl: './supermakert-availability.component.html',
  styleUrls: ['./supermakert-availability.component.css']
})


export class SupermakertAvailabilityComponent implements OnInit {
  @Input() supermarket: SuperMarket;

  items: Array<any>;

  constructor(  private route: ActivatedRoute,
  private supermarketService: SupermarketService, public firebaseService: FirebaseService,
  private location: Location) { }


  ngOnInit() {
    this.getSuperMarket()
    this.firebaseService.getAvailability()
      .subscribe(result => {
      this.items = result;
    })
  }

  getSuperMarket() : void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.supermarketService.getSuperMarket(id)
    .subscribe(supermarket => this.supermarket = supermarket);
}

  goBack(): void {
    this.location.back();
  }


}