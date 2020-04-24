import { Injectable } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { $$ } from '@angular/compiler/src/chars';

export interface Availability { time: string; price: number; }


@Injectable({
  providedIn: 'root',
})

export class FirebaseService {

  itemsRef: AngularFireList<any>;
  availabilities: Observable<any[]>;
  db_vero : AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db_vero = db;
    this.itemsRef = db.list('supermarkets/orari');

    // Use snapshotChanges().map() to store the key
    this.availabilities = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, value: c.payload.val() }))
      )
    );

    
}
  
  getAvailability() : Observable <any[]> {
    //this.getSuperAv('0', 'Bennet');
    return this.availabilities;
  }

  getSuperAv(id_super): Observable <any[]> {
    var super_market = `supermarkets/orari/${id_super}`
    var super_av_times : Observable<any[]>;
    super_av_times = this.db_vero.list(super_market).snapshotChanges().pipe(
      map(changes => 
        changes.map(c => (
          { key: c.payload.key, value: c.payload.val()})
          ))
    );


   return super_av_times
  }


}