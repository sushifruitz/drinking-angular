import { Players } from './../models/players';
import { Component, OnInit } from '@angular/core';
import { CreateUserService } from '../services/firebase.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
