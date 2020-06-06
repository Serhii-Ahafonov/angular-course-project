import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private itemsCollection: any;
  items: Observable<any[]>
  constructor(private afStorage :AngularFirestore) {
    this.itemsCollection = afStorage.collection("Users");
  }

  addUserDataToDB(id,user){
    this.itemsCollection.doc(id).set(user)
  }

  
}
