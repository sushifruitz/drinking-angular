import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Players } from './../models/players';

@Injectable()
export class CreateUserService {

  userCollection: AngularFirestoreCollection<Players>;
  users: Observable<Players[]>;
  playerDoc: AngularFirestoreDocument<Players>;

  constructor(public db: AngularFirestore) {
    this.users = this.db.collection('players', ref => ref.orderBy('score', 'desc')).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Players;
        const id = a.payload.doc.id;
        return { id, ...data };
        }
      );
    });
    this.userCollection = this.db.collection('players');
  }

  getUsers() {
    return this.users;
  }

  addPlayer(players: Players) {
    this.userCollection.add(players);
  }

  deletePlayer(players: Players) {
    this.playerDoc = this.db.doc(`players/${players.id}`);
    this.playerDoc.delete();
  }

  addScore(players: Players) {
    this.playerDoc = this.db.doc(`players/${players.id}`);
    const newScore = players.score + 1;
    this.playerDoc.update({score: newScore });

  }

  removeScore(players: Players) {
    this.playerDoc = this.db.doc(`players/${players.id}`);
    let newScore = players.score;
    if ( newScore > 0 ) {
      newScore = newScore - 1;
    } else {
      console.log('Error');
    }
    this.playerDoc.update({score: newScore });
  }
}
