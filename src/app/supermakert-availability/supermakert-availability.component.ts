import { Component, OnInit, Input, Pipe, PipeDecorator } from '@angular/core';
import { SuperMarket } from '../supermarket'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {SupermarketService} from '../supermarket.service';
import {FirebaseService} from '../firebase.service'


@Pipe({
   name: 'keyValueFilter'
})

export class keyValueFilterPipe {
  constructor(  private route: ActivatedRoute){}
  
  transform(value) {
    let result = [];
    const id = +this.route.snapshot.paramMap.get('id');

    for (var [key, value] of value.entries()) {
        if (key == id){
          result.push({ key, value: value[key] });
        }
    }
    return result;
  }

}

@Component({
  selector: 'app-supermakert-availability',
  templateUrl: './supermakert-availability.component.html',
  styleUrls: ['./supermakert-availability.component.css']
})



export class SupermakertAvailabilityComponent implements OnInit {
  @Input() supermarket: SuperMarket;

  items: any[]=[];
  times: {};

  constructor(  private route: ActivatedRoute,
  private supermarketService: SupermarketService, public firebaseService: FirebaseService,
  private location: Location) {
       
   }


  ngOnInit() {
    this.getSuperMarket()
    this.firebaseService.getAvailability()
      .subscribe(result => {
    this.items = result;
    this.getTimes();
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

  for (let prop of keys_test) { 
      supermarkets.push(destinationObj[prop]);
  }


  for (let market of supermarkets){
    if (market.key == id.toString()){
      selected = market.value;
      console.log(selected);
    }

  }

  this.times = selected


}

  goBack(): void {
    this.location.back();
  }



}