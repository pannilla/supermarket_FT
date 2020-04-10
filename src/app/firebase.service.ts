import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})

export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getUsers(){
  return new Promise<any>((resolve, reject) => {
    this.firestore.collection('/time').snapshotChanges()
    .subscribe(snapshots => {
      resolve(snapshots)
    })
  })
}

}