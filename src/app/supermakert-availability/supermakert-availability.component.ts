import { Component, OnInit, Input } from '@angular/core';
import { SuperMarket } from '../supermarket'

@Component({
  selector: 'app-supermakert-availability',
  templateUrl: './supermakert-availability.component.html',
  styleUrls: ['./supermakert-availability.component.css']
})
export class SupermakertAvailabilityComponent implements OnInit {
  @Input() supermarket: SuperMarket;

  constructor() { }

  ngOnInit() {
  }

}