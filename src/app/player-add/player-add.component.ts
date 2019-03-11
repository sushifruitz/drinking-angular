import { CreateUserService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Players } from '../models/players';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.scss'],
})
export class PlayerAddComponent implements OnInit {
  player: Players = {
    name: '',
    score: 0
  };

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private insertPlayer: CreateUserService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      score: 0
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    if (this.player.name !== '') {
    this.insertPlayer.addPlayer(this.player);
    this.player.name = '';
    }
  }
}
