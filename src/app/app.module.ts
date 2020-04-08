import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SupermarketsComponent } from './supermarkets/supermarkets.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SupermarketsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
