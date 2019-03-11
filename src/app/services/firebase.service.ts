import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

import { Players } from './../models/players';

@Injectable()
export class CreateUserService {

  userCollection: AngularFirestoreCollection<Players>;
  users: Observable<Players[]>;

  constructor(public db: AngularFirestore) {
    this.users = this.db.collection('players', ref => ref.orderBy('score', 'desc')).valueChanges();
    this.userCollection = this.db.collection('players');
  }

  getUsers() {
    return this.users;
  }

  addPlayer(players: Players) {
    this.userCollection.add(players);
  }
}