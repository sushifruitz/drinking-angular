import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

import { Players } from './../models/players';

@Injectable()
export class CreateUserService {

  userCollection: AngularFirestoreCollection<Players>;
  users: Observable<Players[]>;

  constructor(public db: AngularFirestore) {
    this.users = this.db.collection('players').valueChanges();
  }

  getUsers() {
    return this.users;
  }
}



/* createUser(name){
  return this.db.collection('players').add({
    name: value.name,
    nameToSearch: value.name.toLowerCase(),
    score: 0
  });
}; */
