import { Players } from './../models/players';
import { Component, OnInit } from '@angular/core';
import { CreateUserService } from '../services/firebase.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  players: Players[];

  constructor(private Player: CreateUserService) { }

  ngOnInit() {
    this.Player.getUsers().subscribe(players => {
      console.log(players);
      this.players = players;
    });
  }

  deletePlayer(event, player) {
    console.log(event);
    this.Player.deletePlayer(player);
  }

  addScore(event, player) {
    console.log(event);
    this.Player.addScore(player);
  }

  removeScore(event, player) {
    console.log(event);
    this.Player.removeScore(player);
  }
}

// TODO: Add Animations
// TODO: Add Infinite Vertical Scroll
// TODO: Ability to edit name
// FIXME: Give an alert when tryind to reduce beverages below 0
// FIXME: Colors don't repeat when people have the same drinks consumed
