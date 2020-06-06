import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

import { Router } from '@angular/router';
import { User } from './auth-module';
import { switchMap } from 'rxjs/operators';
import { DataStorageService } from './data-storage.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: AngularFirestoreCollection<any>;
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private dss: DataStorageService
    
    ) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user){
          return this.afs.doc<User>(`Users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    );
    this.afAuth.authState.subscribe(console.log)
      
  }

  createUser(userData){

    let { name, email, password } = userData

    this.afAuth.createUserWithEmailAndPassword(email,password)
    .then(res =>{
      this.dss.addUserDataToDB(res.user.uid,{name, email, password})
      // this.router.navigate()
    })
    .catch(err =>{
      alert(err.message)
    })

  }

  login(email, password){
    this.afAuth.signInWithEmailAndPassword(email , password)
    .then(res =>{
      console.log('Logined', this.afAuth.authState);
      
      this.router.navigate(["../home"])
    })
    
    .catch(err =>{
      alert(err.message)
    })
  }

  logout(){
    this.afAuth.signOut().then(res=>{
      this.router.navigate(["/login"])
    })
  }
}

