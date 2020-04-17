import { Injectable } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

export interface Availability { time: string; price: number; }


@Injectable({
  providedIn: 'root',
})

export class FirebaseService {

  itemsRef: AngularFireList<any>;
  availabilities: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('supermarkets/orari');
    this.itemsRef.snapshotChanges(['child_added'])
  .subscribe(actions => {
    actions.forEach(action => {
    });
  });
    // Use snapshotChanges().map() to store the key
    this.availabilities = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, value: c.payload.val() }))
      )

    );
}
  
  getAvailability() : Observable <any[]> {
    return this.availabilities;
  }



}