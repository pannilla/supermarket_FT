import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SupermarketsComponent } from './supermarkets/supermarkets.component';
import { SupermakertAvailabilityComponent } from './supermakert-availability/supermakert-availability.component';
import { SupermarketService } from './supermarket.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SupermarketsComponent, SupermakertAvailabilityComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SupermarketService]
})
export class AppModule { }
