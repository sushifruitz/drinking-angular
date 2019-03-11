import { Component, OnInit } from '@angular/core';
import { CreateUserService } from '../services/firebase.service';
import { Players } from '../models/players';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  players: Players[];

  constructor(private insertPlayer: CreateUserService) { }

  ngOnInit() {
    this.insertPlayer.getUsers().subscribe(players => {
      console.log(players);
      this.players = players;
    });
  }

}
