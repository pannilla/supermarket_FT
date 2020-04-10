import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SupermarketsComponent } from './supermarkets/supermarkets.component';
import { SupermakertAvailabilityComponent } from './supermakert-availability/supermakert-availability.component';
import { SupermarketService } from './supermarket.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports:      [ AngularFireModule.initializeApp(environment.firebase),AngularFirestoreModule,
  AngularFireDatabaseModule,BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, SupermarketsComponent, SupermakertAvailabilityComponent, MessagesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SupermarketService, AngularFirestoreModule, MessageService,{provide: APP_BASE_HREF, useValue: '/'}]

})
export class AppModule { }
