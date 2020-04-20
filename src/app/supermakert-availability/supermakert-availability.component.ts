import { Component, OnInit, Input} from '@angular/core';
import { SuperMarket } from '../supermarket'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {SupermarketService} from '../supermarket.service';
import {FirebaseService} from '../firebase.service';
import {MapToIterablePipe} from '../map-to-iterable'



@Component({
  selector: 'app-supermakert-availability',
  templateUrl: './supermakert-availability.component.html',
  styleUrls: ['./supermakert-availability.component.css']
})



export class SupermakertAvailabilityComponent implements OnInit {
  @Input() supermarket: SuperMarket;

  items: any[]=[];
  times: {};
  hours: any[]= [];

  constructor(  private route: ActivatedRoute,
  private supermarketService: SupermarketService, public firebaseService: FirebaseService,
  private location: Location, private mapToIterable: MapToIterablePipe ) {
       
   }


  ngOnInit() {
    this.getSuperMarket()
    this.firebaseService.getAvailability()
      .subscribe(result => {
    this.items = result;
    this.getTimes();
    this.getHoursHeader();
    })

    

  }

  getSuperMarket() : void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.supermarketService.getSuperMarket(id)
    .subscribe(supermarket => this.supermarket = supermarket);
}

getTimes(): void{
  const id = +this.route.snapshot.paramMap.get('id');
  var destinationObj = {};
  let selected = {};

  
  Object.assign(destinationObj, this.items);

  
  let keys_test = Object.keys(destinationObj);
  let supermarkets= [];
  let keys = [];

  for (let prop of keys_test) { 
      supermarkets.push(destinationObj[prop]);
  }

  for (let market of supermarkets){
    if (market.key == id.toString()){
      selected = market.value;
      keys = Object.keys(selected);
    }

  }


  this.times = selected[keys[0]];

}

getHoursHeader():void{
  let keyshour =  Object.keys(this.times);
  
  let hours  = [] ;
  for (let i = 0; i < keyshour.length; i++) {
      let day = [];
      day = this.times[keyshour[i]];
      
      let result = {};
      if (i == 0){
        for (let j = 0; j < day.length; j++ ){
        result= day[j];
        let key = Object.keys(result);
        hours.push(key);
      }

      }
      
  }

  this.hours = hours;

}

  goBack(): void {
    this.location.back();
  }



}